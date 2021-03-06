import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TabsModule, ButtonsModule } from 'ngx-bootstrap';

import { SelectModule } from 'ng2-select/src';
import { AppComponent } from './app.component';
import { SelectSectionComponent } from './components/select-section';
import { ChildrenDemoComponent } from './components/select/children-demo';
import { MultipleDemoComponent } from './components/select/multiple-demo';
import { RichDemoComponent } from './components/select/rich-demo';
import { SingleDemoComponent } from './components/select/single-demo';
import { SampleSectionComponent } from './components/sample-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleSectionComponent,
    SelectSectionComponent,
    ChildrenDemoComponent,
    MultipleDemoComponent,
    RichDemoComponent,
    SingleDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    CommonModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
