import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';




@Component({
  selector: 'app-filter-column',
  templateUrl: './filter-column.component.html',
  styleUrls: ['./filter-column.component.css']
})
export class FilterColumnComponent implements OnInit {
  api:any;
  columnApi:any;
  rowStyle : any;
  getRowStyle: any;



  
  columnDefs: ColDef[] = [
    { field: 'athlete', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'country', sortable: true, filter: true },
    { field: 'year', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'sport', sortable: true, filter: true },
    { field: 'gold', sortable: true, filter: true },
    { field: 'silver', sortable: true, filter: true },
    { field: 'bronze', sortable: true, filter: true },
    { field: 'total', sortable: true, filter: true }
];

  rowData:Observable<any[]>;
  constructor(private http:HttpClient ) { 
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
    
   }

  ngOnInit(): void {
   
  
  }

//   onGridReady = (params:any) => {
//     this.api = params.api;
//     this.columnApi = params.columnApi;
// }

}

