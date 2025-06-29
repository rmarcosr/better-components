import { Component, Input } from '@angular/core';
import { BCTimelineData } from '../../types/timeline-data';

@Component({
  selector: 'bc-vertical-timeline',
  standalone: true,
  imports: [],
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.css'
})
export class BCVerticalTimelineComponent {

  /** Indicate the items to show in the time line */
  @Input() timelineData: BCTimelineData[] = []
}
