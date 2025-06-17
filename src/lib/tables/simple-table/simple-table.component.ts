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
  @Output() rowClicked = new EventEmitter<any>();

  /** Emits the clicked row through the output event. */
  onRowClick(row: any): void {
    this.rowClicked.emit(row)
  }

}