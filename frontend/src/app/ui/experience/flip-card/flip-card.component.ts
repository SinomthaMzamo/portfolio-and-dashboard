import { Component, Input, SimpleChanges } from '@angular/core';
import { CoreAspectOfExperience, ExperienceEntry, HeaderInfo } from '../../../models/experience.model';
import { TabsComponent } from "../tabs/tabs.component";
import { PillsComponent } from "../pills/pills.component";

@Component({
  selector: 'app-flip-card',
  imports: [TabsComponent, PillsComponent],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent {
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
