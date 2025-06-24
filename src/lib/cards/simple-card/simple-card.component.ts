import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-simple-card',
  standalone: true,
  imports: [],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.css'
})
export class BCSimpleCardComponent {

  /** The card title. */
  @Input() title: string = "Default Title";

  /** The card subtitle, indicate a card information. */
  @Input() text: string = "Default card subtitle";

  /** Indicate if use alternative style on dark mode */
  @Input() dark: boolean = false;

}
