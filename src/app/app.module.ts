import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { NewFilterPipe } from './pipes/new-filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewFilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    FormsModule,
    OrderModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      loader:HttpClient, sanitize:SecurityContext.NONE
    })
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
