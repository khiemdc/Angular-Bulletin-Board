import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './home/message/message.component';
import { MessageService } from './services/message.service';
import { FilterPipe } from './shared/content-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
