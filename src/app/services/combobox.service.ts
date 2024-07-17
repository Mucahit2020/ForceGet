import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ModeItems } from '../models/modeItems';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ComboboxService {

  constructor(private http: HttpClient) {}

  getModeOptions(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/mode`);
  }

  getCountryOptions(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/countries`);

  }
  getMovementType(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/movementType`);

  }
  getIncoterms(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/incoterms`);

  }
  getPackageType(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/packageType`);

  }
  getUnit1(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/unit1`);

  }
  getUnit2(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/unit2`);

  }
  getCurrency(): Observable<ModeItems[]> {
    return this.http.get<ModeItems[]>(`${environment.apiUrl}/api/ComboBox/currency`);

  }



}
