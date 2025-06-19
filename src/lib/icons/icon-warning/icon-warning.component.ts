import { Component, Input } from '@angular/core';
/**
 * BetterComponents Icon Warning
 * 
 * A icon for warn users
 * Click to show a personalized message.
 *
 */
@Component({
  selector: 'bc-icon-warning',
  standalone: true,
  imports: [],
  templateUrl: './icon-warning.component.html',
  styleUrl: './icon-warning.component.css'
})
export class BCIconWarningComponent {

  /** The message to show */
  @Input() message = "Default Message";

  /** Indicate if a message is visible */
  visibility = false;

  /** Reverses the visibility */
  changeVisibility() {
    this.visibility = !this.visibility;
  }

}
