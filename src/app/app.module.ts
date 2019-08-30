import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RotationDemoComponent } from './rotation-demo/rotation-demo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, RotationDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
