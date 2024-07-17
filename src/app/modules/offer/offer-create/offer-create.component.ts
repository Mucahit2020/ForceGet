import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeItems } from 'src/app/models/modeItems';
import { Offer } from 'src/app/models/offer';
import { ComboboxService } from 'src/app/services/combobox.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-create',
  templateUrl: './offer-create.component.html',
  styleUrls: ['./offer-create.component.css']
})
export class OfferCreateComponent implements OnInit {

  comboBoxForm: FormGroup;
  comboBox1Data: ModeItems[] = [];
  comboBox2Data: ModeItems[] = [];
  comboBox3Data: ModeItems[] = [];
  comboBox4Data: ModeItems[] = [];
  comboBox5Data: ModeItems[] = [];
  comboBox6Data: ModeItems[] = [];
  comboBox7Data: ModeItems[] = [];
  comboBox8Data: ModeItems[] = [];

  constructor(
    private fb: FormBuilder,
    private comboBoxService: ComboboxService,
    private router: Router,
    private offerService: OfferService,
    private notification: NzNotificationService


  ) {
    this.comboBoxForm = this.fb.group({
      comboBox1: [null, Validators.required],
      comboBox2: [null, Validators.required],
      comboBox3: [null, Validators.required],
      comboBox4: [null, Validators.required],
      comboBox5: [null, Validators.required],
      comboBox6: [null, Validators.required],
      comboBox7: [null, Validators.required],
      comboBox8: [null, Validators.required],
      quantity: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadComboBoxData();
  }

  findOptionNameById(options: ModeItems[], id: number): string {
    const option = options.find(o => o.id === id);
    return option ? option.name : '';
  }

  loadComboBoxData(): void {
    this.comboBoxService.getModeOptions().subscribe(data => {
      this.comboBox1Data = data;
    });

    this.comboBoxService.getMovementType().subscribe(data => {
      this.comboBox2Data = data;
    });

    this.comboBoxService.getIncoterms().subscribe(data => {
      this.comboBox3Data = data;
    });

    this.comboBoxService.getCountryOptions().subscribe(data => {
      this.comboBox4Data = data;
    });

    this.comboBoxService.getPackageType().subscribe(data => {
      this.comboBox5Data = data;
    });

    this.comboBoxService.getUnit1().subscribe(data => {
      this.comboBox6Data = data;
    });

    this.comboBoxService.getUnit2().subscribe(data => {
      this.comboBox7Data = data;
    });

    this.comboBoxService.getCurrency().subscribe(data => {
      this.comboBox8Data = data;
    });
  }

  onSubmit(): void {
    if (this.comboBoxForm.valid) {
      const formValues = this.comboBoxForm.value;
      const offer: Offer = {
        mode: this.findOptionNameById(this.comboBox1Data, formValues.comboBox1),
        movementType: this.findOptionNameById(this.comboBox2Data, formValues.comboBox2),
        incoterm: this.findOptionNameById(this.comboBox3Data, formValues.comboBox3),
        country: this.findOptionNameById(this.comboBox4Data, formValues.comboBox4),
        packageType: this.findOptionNameById(this.comboBox5Data, formValues.comboBox5),
        unit1: this.findOptionNameById(this.comboBox6Data, formValues.comboBox6),
        unit2: this.findOptionNameById(this.comboBox7Data, formValues.comboBox7),
        currency: this.findOptionNameById(this.comboBox8Data, formValues.comboBox8),
        quantity: formValues.quantity
      };
      console.log('Form Verileri:', offer);

      // API'ye POST isteği gönderme
      this.offerService.postOffer(offer).subscribe(
        response => {
          console.log('Successfully submitted:', response);
          this.notification.create(
            'success',
            'Success',
            'The offer was successfully saved.'
          );
          this.router.navigate(['/offer/fetch']);
        },
        error => {
          console.error('Submission error:', error);
          this.notification.create(
            'error',
            'Error',
            error.error || 'An error occurred while saving the offer. Please try again.'
          );
        }
      );
    } else {
      console.error('Form is invalid. Please fill out all required fields.');
      this.notification.create(
        'warning',
        'Form Invalid',
        'The form is invalid. Please fill out all required fields.'
      );
    }
  }
}
