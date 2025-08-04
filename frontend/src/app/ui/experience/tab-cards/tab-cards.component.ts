import { Component, Input, SimpleChanges } from '@angular/core';
import { TabsComponent } from "../tabs/tabs.component";
import { PillsComponent } from "../pills/pills.component";
import { ExperienceEntry } from '../../../models/experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-cards',
  imports: [CommonModule, TabsComponent, PillsComponent],
  templateUrl: './tab-cards.component.html',
  styleUrl: './tab-cards.component.css'
})
export class TabCardsComponent {
  @Input({ required: true }) experienceEntry!: ExperienceEntry;
  @Input() class: string = "";

  header: any;
  duration: { start: string, end: string } = { start: '', end: '' };
  tabTitles: string[] = [];
  selectedTabOutcomes: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['experienceEntry'] && this.experienceEntry) {
      this.header = this.experienceEntry.header;
      this.duration = this.header.duration;
      this.tabTitles = this.experienceEntry.tabs.map(t => t.name);
      this.selectedTabOutcomes = this.experienceEntry.tabs[0]?.notableOutcomes || [];
    }
  }

}
