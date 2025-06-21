import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BCTableData } from '../../types/table-data';

/**
 * BetterComponents Simple Table Component
 * 
 * A minimal and interactive table component for simple datasets.
 * Emits the row data when a row is clicked.
 */

@Component({
  selector: 'bc-simple-table',
  standalone: true,
  imports: [],
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.css'
})

export class BCSimpleTableComponent {

  /** The data to display. */
  @Input() tableData?: BCTableData;

  /** Emits the selected row object when a user clicks on a row. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() rowClicked = new EventEmitter<any>();

  /** Indicate if use alternative style on dark mode */
  @Input() dark: boolean = false;

  /** Emits the clicked row through the output event. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onRowClick(row: any): void {
    this.rowClicked.emit(row)
  }

}