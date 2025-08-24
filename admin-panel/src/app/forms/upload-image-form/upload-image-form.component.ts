import { Component, signal } from '@angular/core';
import { ImageUploaderComponent } from "../image-uploader/image-uploader.component";
import { LoadingScreenComponent } from "../../shared/loading-screen/loading-screen.component";
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-image-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, ImageUploaderComponent, LoadingScreenComponent],
  templateUrl: './upload-image-form.component.html',
  styleUrl: './upload-image-form.component.css'
})
export class UploadImageFormComponent {
  uploadImageForm = new FormGroup({
    image: new FormControl(null),
    });
  
    constructor(private http: HttpClient) {}
    isLoading = signal(false);
    showLoadingScreen(){this.isLoading.set(true)};
    hideLoadingScreen(){this.isLoading.set(false)};
  
    onSubmit(formValue: any) {
      console.log(formValue);
      this.showLoadingScreen()
      if (!this.uploadImageForm.valid) {
        alert('Please fill out all required fields.');
        return;
      }
      const fileList:File[] | null = formValue.image as File[] | null;
      const file = fileList![0];
    
      let fileMeta: any = {};
    
      if (file) {
        fileMeta = {
          fileName: file.name,
          fileType: file.type,
        };
        console.log("file meta:", fileMeta)
      }
    
      // Metadata payload (NOT including the raw file yet)
      const body = {
        ...fileMeta
      };
    
      const apiUrl = 'https://9o9p856081.execute-api.af-south-1.amazonaws.com/Prod/avatar';
    
      this.http.post<any>(apiUrl, body, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe({
        next: async (res) => {
          console.log("API responded:", res);
    
          // If file present, upload to S3
          if (file && res.uploadUrl) {
            try {
              await this.http.put(res.uploadUrl, file).toPromise();
    
              console.log("✅ File uploaded successfully to S3:", res);
          
              this.hideLoadingScreen();
              alert("Avatar updated successfully!");
              console.log(res.uploadUrl)
              window.location.reload();
            } catch (err) {
              this.hideLoadingScreen();
              console.error("❌Error uploading to S3:", err);
              alert("Error uploading file to S3");
            }
          } else {
            this.hideLoadingScreen();
            alert("(no image uploaded).");
          }
        },
        error: (err) => {
          this.hideLoadingScreen();
          console.error("🚫API error:", err);
          alert('Error sending project: ' + err.message);
        }
      });
    }
}
