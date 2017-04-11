import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteComponent, AboutComponent, AuthComponent } from './container';
import {
  AppBarComponent,
  NoteCardComponent,
  NoteCreatorComponent,
  ColorPickerComponent,
} from './ui';
import {
  ApiService,
  NotesService,
  StoreService,
  StoreHelperService,
  AuthService,
 } from './services';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    NoteComponent,
    NoteCardComponent,
    NoteCreatorComponent,
    ColorPickerComponent,
    AboutComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    ApiService,
    NotesService,
    StoreService,
    StoreHelperService,
    AuthService,
    {provide : 'api', useValue: 'http://localhost/www/ang4SymRest/web/app_dev.php'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
