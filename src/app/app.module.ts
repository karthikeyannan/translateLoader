import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule ,TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environment/environment';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { FormsModule } from '@angular/forms';
import { reducer, reducerCustomerFeatureKey } from './mod/reducer/reducer-customer.reducer';

export function HttpModule (http:HttpClient){
   return new TranslateHttpLoader(http)
}
@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    CustomerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpModule, 
        deps:[HttpClient]
      }
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    environment ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(reducerCustomerFeatureKey,reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
