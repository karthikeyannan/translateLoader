import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as CustomerReduce from 'src/app/mod/reducer/reducer-customer.reducer'

export const SelectCustomerState = createFeatureSelector<CustomerReduce.State>(
     CustomerReduce.reducerCustomerFeatureKey
)

export const SelectCustomer = createSelector(
    SelectCustomerState,
    (state:CustomerReduce.State) => state.customers
)
