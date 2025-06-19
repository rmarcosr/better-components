import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BCTableData } from '../../types/table-data';
import { FormsModule } from '@angular/forms';

/**
 * BetterComponents Table Component
 * 
 * A searchable and clickable data table.
 * Ideal for rendering large datasets with client-side filtering.
 *
 */
@Component({
  selector: 'bc-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class BCTableComponent {

  /** The data to display. */
  @Input() tableData?: BCTableData;

  /** Emits the selected row object when a user clicks on a row. */
  @Output() rowClicked = new EventEmitter<unknown>();

  /** The current search term used for filtering rows. */
  searchItem: string = '';

  /** All rows that match the search. */
  filteredRows: any[] = [];

  /** Initializes the filtered rows with the full dataset. */
  ngOnInit(): void {
    this.filteredRows = this.tableData?.rowData ?? [];
  }

  /**
   * Filters all rows based on the given search term
   * and updates the displayed results.
   * 
   * @param term The term to filter rows by.
   */
  onSearch(term: string): void {
    this.searchItem = term.toLowerCase();
    this.filteredRows = this.tableData?.rowData.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(this.searchItem)
      )
    ) ?? [];
  }

  /** Emits the clicked row through the output event. */
  onRowClick(row: unknown): void {
    this.rowClicked.emit(row);
  }

}