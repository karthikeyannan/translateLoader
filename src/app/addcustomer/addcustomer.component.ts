import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../models/customer';
import * as ActionCustomer from "src/app/action/store/addcustomer.actions"
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {
  name = ""
  constructor(private store:Store){

  }
  submit(){
    const customer = new Customer();
    customer.name = this.name;
    console.log(customer)
    this.store.dispatch(ActionCustomer.AddcustomerActions(customer))
  }
}
