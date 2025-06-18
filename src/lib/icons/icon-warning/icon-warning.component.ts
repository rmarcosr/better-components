import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-icon-warning',
  standalone: true,
  imports: [],
  templateUrl: './icon-warning.component.html',
  styleUrl: './icon-warning.component.css'
})
export class IconWarningComponent {

  @Input() message = "Default Message";

  visibility = false;

  changeVisibility() {
    this.visibility = !this.visibility;
  }

}
