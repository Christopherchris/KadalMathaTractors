import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EditorModule } from 'primeng/editor';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule,
    TabsModule.forRoot(),
    EditorModule
  ]
})
export class SettingsModule { }
