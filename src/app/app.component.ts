import { Component,  } from '@angular/core';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'data-grid-test';
  columnDefs =[
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true},
    { field: 'demo', sortable: true, filter: true}
  ]

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 , demo:'yes' },
    { make: 'Ford', model: 'Mondeo', price: 32000, demo : 'no' },
    { make: 'Porsche', model: 'Boxter', price: 72000,demo :'something'},
    { make: 'Tata', model: 'Sdf', price: 7000, demo:'no'},
   
   
    
];

}
