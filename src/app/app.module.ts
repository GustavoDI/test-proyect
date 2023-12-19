import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule,NgxLoggerLevel } from "ngx-logger";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { PruebaComponent } from './shared/compartido/prueba/prueba.component';
import { PasswordComponent } from './shared/password/password.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    PruebaComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    LoggerModule.forRoot({
        serverLoggingUrl: '/api/logs',
        level: NgxLoggerLevel.TRACE,
        serverLogLevel: NgxLoggerLevel.ERROR,
        disableConsoleLogging: false
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
