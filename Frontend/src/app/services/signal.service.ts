import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  isCompanyCollabOpen = signal(true);
  constructor() { }
}
