import { Component, Input } from '@angular/core';

@Component({
  selector: 'bc-icon-helper',
  standalone: true,
  imports: [],
  templateUrl: './icon-helper.component.html',
  styleUrl: './icon-helper.component.css'
})
export class BCIconHelperComponent {

  @Input() message = "Default Message";

  visibility = false;

  changeVisibility() {
    this.visibility = !this.visibility;
  }

}
