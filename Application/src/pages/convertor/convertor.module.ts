import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvertorPage } from './convertor';

@NgModule({
  declarations: [
    ConvertorPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvertorPage),
  ],
})
export class ConvertorPageModule {}
