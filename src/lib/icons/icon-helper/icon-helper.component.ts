import { Component, Input } from '@angular/core';
/**
 * BetterComponents Icon Helper
 * 
 * A icon for helping users
 * Click to show a personalized message.
 *
 */
@Component({
  selector: 'bc-icon-helper',
  standalone: true,
  imports: [],
  templateUrl: './icon-helper.component.html',
  styleUrl: './icon-helper.component.css'
})
export class BCIconHelperComponent {

  /** The message to show */
  @Input() message = "Default Message";

  /** Indicate if a message is visible */
  visibility = false;

  /** Reverses the visibility */
  changeVisibility() {
    this.visibility = !this.visibility;
  }

}
