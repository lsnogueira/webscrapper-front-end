import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }

  getFormatDate(): string {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1; // janeiro = 0
    const year = today.getFullYear();

    let dd = String(day);
    let mm = String(month);
    const yyyy = String(year);

    if (day < 10) {
      dd = `0${dd}`;
    }
    if (month < 10) {
      mm = `0${mm}`;
    }

    return dd + '_' + mm + '_' + yyyy;
  }
}
