import { Component } from '@angular/core';
import { Store ,select} from '@ngrx/store';
import { Customer } from '../models/customer';
import * as selectState from 'src/app/selector/customer.selectors'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent {
Customer$! : Observable<Customer[]>;
constructor(private store:Store){
  

  this.Customer$ = this.store.pipe(select(selectState.SelectCustomer))
 
}

}
