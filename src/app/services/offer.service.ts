import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = `${environment.apiUrl}/api/offer/`;


  constructor(private http: HttpClient) {}

  postOffer(offer: Offer): Observable<any> {
    return this.http.post<any>(this.apiUrl+'create', offer);
  }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl+'fetch');
  }


}
