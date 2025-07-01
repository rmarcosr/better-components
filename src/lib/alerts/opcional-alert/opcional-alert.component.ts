import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * BetterComponents Optional Alert Component
 * 
 * A customizable alert with two actions and a title/message.
 * 
 */
@Component({
  selector: 'bc-optional-alert',
  standalone: true,
  imports: [],
  templateUrl: './opcional-alert.component.html',
  styleUrls: ['../../styles/common-styles.css', './opcional-alert.component.css']
})
export class BCOpcionalAlertComponent {

  /** The main alert message. */
  @Input() message: string = "Default Message";

  /** The alert title. */
  @Input() title: string = "Alert Title";

  /** Text for the first action button. */
  @Input() firstButton: string = "Option 1";

  /** Text for the second action button. */
  @Input() secondButton: string = "Option 2";

  /** Indicate if use alternative style on dark mode */
  @Input() dark: boolean = false;

  /** Emits when the first button is clicked. */
  @Output() firstEvent = new EventEmitter<void>();

  /** Emits when the second button is clicked. */
  @Output() secondEvent = new EventEmitter<void>();

  /** Emits the first event when the first button is clicked. */
  firstAction(): void {
    this.firstEvent.emit();
  }

  /** Emits the second event when the second button is clicked. */
  secondAction(): void {
    this.secondEvent.emit();
  }

}
