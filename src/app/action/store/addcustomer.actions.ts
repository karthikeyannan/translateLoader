import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const AddcustomerActions = createAction(
  '[Customer] AddCustomer',
  (customer:Customer) => (
    {customer})
);
