import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NovoListModule, NovoElementsModule, NovoHeaderModule, NovoModalModule, NovoModalService, FieldInteractionApi, NovoToastService,  } from 'novo-elements';
import { ConfirmComponent } from './confirm/confirm.component';
import { LoginComponent } from './login/login.component';
import { SelectPreferenceComponent } from './select-preference/select-preference.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'select/:id/:userId', component: SelectPreferenceComponent },
  { path: 'confirm/:id/:userId', component: ConfirmComponent },
];

@NgModule({
   declarations: [
      AppComponent,
      ConfirmComponent,
      LoginComponent,
      SelectPreferenceComponent
   ],
   imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    NovoElementsModule,
    NovoListModule,
    NovoHeaderModule,
    BrowserTransferStateModule,
    NovoModalModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: false },),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
