import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/models/offer';
import { AuthService } from 'src/app/services/auth.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-fetch',
  templateUrl: './offer-fetch.component.html',
  styleUrls: ['./offer-fetch.component.css']
})
export class OfferFetchComponent implements OnInit {

  listOfData: Offer[] = [];

  constructor(private offerService: OfferService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers(): void {
    this.offerService.getOffers().subscribe(
      (data: Offer[]) => {
        this.listOfData = data;
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
