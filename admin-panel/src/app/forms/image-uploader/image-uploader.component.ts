import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

interface FileItem {
  file: File;
  url: string;
}

@Component({
  selector: 'app-image-uploader',
  imports: [CommonModule],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css'
})
export class ImageUploaderComponent {
  readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  readonly ACCEPTED_TYPES = [
    'image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp', 'image/svg+xml'
  ];

  store: FileItem[] = [];
  errorMsg = '';
  metaText = 'No files selected';
  isDragOver = false;

  // Modal state
  showPreview = false;
  previewItem?: FileItem;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.addFiles(input?.files ?? null);
  }
  
  /** Add files from input or drop */
  addFiles(fileList: FileList | null) {
    if (!fileList) return;
  
    let added = 0;
    Array.from(fileList).forEach(f => {
      if (this.isAccepted(f)) {
        const url = URL.createObjectURL(f);
        this.store.push({ file: f, url });
        added++;
      }
    });
  
    if (added === 0 && fileList.length > 0) {
      this.showError('No valid images to add.');
    }
    this.updateMeta();
  }
  

  private isAccepted(file: File): boolean {
    if (!this.ACCEPTED_TYPES.includes(file.type)) return false;
    if (file.size > this.MAX_FILE_SIZE) {
      this.showError(`${file.name} is too large (max 5 MB).`);
      return false;
    }
    return true;
  }

  private updateMeta() {
    this.metaText = this.store.length === 0
      ? 'No files selected'
      : `${this.store.length} image${this.store.length > 1 ? 's' : ''} ready`;
  }

  private showError(msg: string) {
    this.errorMsg = msg;
    setTimeout(() => this.errorMsg = '', 5000);
  }

  removeImage(idx: number) {
    const item = this.store[idx];
    if (item) {
      URL.revokeObjectURL(item.url);
      this.store.splice(idx, 1);
      this.updateMeta();
    }
  }

  clearAll() {
    this.store.forEach(it => URL.revokeObjectURL(it.url));
    this.store = [];
    this.updateMeta();
  }

  openPreview(item: FileItem) {
    if (!item) return;
    this.previewItem = item;
    this.showPreview = true;
  }
  
  closePreview() {
    if (!this.previewItem) return;
    this.previewItem = undefined;
    this.showPreview = false;
  }
  // ESC closes preview
  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.showPreview) this.closePreview();
  }

  // Dropzone events
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    if (event.dataTransfer) {
      this.addFiles(event.dataTransfer.files);
    }
  }
}