import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * BetterComponents Simple Alert Component
 * 
 * A simple alert with a title, message, and a close button.
 */
@Component({
  selector: 'bc-simple-alert',
  standalone: true,
  imports: [],
  templateUrl: './simple-alert.component.html',
  styleUrl: './simple-alert.component.css'
})
export class BCSimpleAlertComponent {

  /** The main alert message. */
  @Input() message: string = "Default Message";

  /** The alert title. */
  @Input() title: string = "Alert Title";

  /** Text for the action button. */
  @Input() buttonText: string = "Close";

  /** Indicate if use alternative style on dark mode */
  @Input() dark: boolean = false;

  /** Emits the event when the alert button is clicked. */
  @Output() event = new EventEmitter<void>();

  /** Emits the event when the button is clicked. */
  action(): void {
    this.event.emit();
  }

}
