import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class BCCardComponent {

  /** The card title. */
  @Input() title: string = "Default Title";

  /** The card subtitle, indicate a card information. */
  @Input() text: string = "Default card subtitle";

  /** Indicate if use alternative style on dark mode */
  @Input() dark: boolean = false;

  @Input() src: string = "";

}
