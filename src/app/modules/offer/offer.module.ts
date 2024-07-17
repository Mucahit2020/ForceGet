import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferRoutingModule } from './offer.routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferCreateComponent } from './offer-create/offer-create.component';
import { OfferFetchComponent } from './offer-fetch/offer-fetch.component';
import { NzNotificationServiceModule } from 'ng-zorro-antd/notification';


@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    NzLayoutModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzMessageModule,
    NzSelectModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    NzNotificationServiceModule
   ],
  declarations: [OfferCreateComponent, OfferFetchComponent]
})
export class OfferModule { }
