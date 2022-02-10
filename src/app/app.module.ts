import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';
import { AppComponent } from './app.component';
import { NestedFlowComponent } from './nested-flow/nested-flow.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgFlowchartModule],
  declarations: [AppComponent, NestedFlowComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
