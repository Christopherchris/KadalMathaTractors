import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OnlinebookingComponent } from './onlinebooking.component';
//prime cmodules
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { OnlinebookingRoutingModule } from './onlinebooking-routing.module';

@NgModule({
  declarations: [OnlinebookingComponent],
  imports: [
    CommonModule,
    FormsModule,
    OnlinebookingRoutingModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SidebarModule,
    TableModule,
    CollapseModule,
    ScrollPanelModule,
    AccordionModule,
    ListboxModule,
    DropdownModule
  ]
})
export class OnlinebookingModule { }
