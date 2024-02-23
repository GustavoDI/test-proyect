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
import { ReporteComponent } from './shared/compartido/reporte/reporte.component';
import { PruebaMarioComponent } from './shared/compartido/mario/prueba-mario.component';
import { MarioRComponent } from './shared/compartido/mario-r/mario-r.component';
import { DwhPausasComponent } from './shared/compartido/dwh-pausas/dwh-pausas.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    PruebaComponent,
    PasswordComponent,
    ReporteComponent,
    PruebaMarioComponent,
    MarioRComponent,
    DwhPausasComponent
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
