import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeItems } from 'src/app/models/modeItems';
import { ComboboxService } from 'src/app/services/combobox.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
