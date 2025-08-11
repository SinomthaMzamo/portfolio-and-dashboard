import { Component, Input, SimpleChanges } from '@angular/core';
import { HeaderInfo, CoreAspectOfExperience, ExperienceEntry } from '../../../models/experience.model';
import { TabComponent } from "../tab/tab.component";
import { PillComponent } from "../../../src/app/ui/work-experience/pill/pill.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-flip-card',
  imports: [TabComponent, PillComponent, CommonModule],
  templateUrl: './tab-flip-card.component.html',
  styleUrl: './tab-flip-card.component.css'
})
export class TabFlipCardComponent {
  @Input() header!: HeaderInfo;

  @Input() tabs!: CoreAspectOfExperience;
  @Input({ required: true }) experienceEntry!: ExperienceEntry;
  @Input() class: string = "";

  selectedTabIndex: number = 0;

  flipped = false;

  duration: { start: string, end: string } = { start: '', end: '' };
  tabTitles: string[] = [];
  selectedTabOutcomes: string[] = [];

  ngOnInit(): void {
    this.updateSelectedTab();
  }

  onTabSelected(index: number): void {
    this.selectedTabIndex = index;
    this.updateSelectedTab();
  }

  updateSelectedTab(): void {
    this.selectedTabOutcomes = this.experienceEntry.tabs[this.selectedTabIndex].notableOutcomes;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['experienceEntry'] && this.experienceEntry) {
      this.header = this.experienceEntry.header;
      this.duration = this.header.duration;
      this.tabTitles = this.experienceEntry.tabs.map(t => t.name);
      this.selectedTabOutcomes = this.experienceEntry.tabs[0]?.notableOutcomes || [];
    }
  }

  toggleFlip(state:boolean) {
    this.flipped = state;
  }
}
