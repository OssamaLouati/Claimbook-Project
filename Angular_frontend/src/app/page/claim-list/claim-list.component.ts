import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Claim } from '../../claim';
import { ClaimService } from '../../service/claim-service.service';
import { NgbdSortableHeader, SortEvent } from '../../directive/sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
		NgClass,
	],
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})

export class ClaimListComponent{
  countries$: Observable<Claim[]>;
	total$: Observable<number>;

	@ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

	constructor(public service: ClaimService) {
		this.countries$ = service.countries$;
		this.total$ = service.total$;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
  }

}
