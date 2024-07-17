import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as CutomerAction  from 'src/app/action/store/addcustomer.actions'

export const reducerCustomerFeatureKey = 'reducerCustomer';

export interface State {
  customers :Customer[];

}

export const initialState: State = {
  customers: []
};

export const reducer = createReducer(
  
  initialState,
  on(CutomerAction.AddcustomerActions,(state:State,{customer}) => (
  
  {
     ...state,
     customers:[...state.customers,customer]
    
    
  }
))
);

