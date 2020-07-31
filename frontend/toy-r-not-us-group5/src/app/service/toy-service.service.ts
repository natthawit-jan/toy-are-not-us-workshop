import { Injectable } from '@angular/core';
import toys from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class ToyServiceService {
  constructor() {}

  getToys() {
    return toys;
  }

  getToyAt(id: number) {
    return toys.filter((i) => i.id == id)[0];
  }

  getCurrentCartItems() {
    // Only for testing purposes
    const debug = { ...toys[0], currentQuantity: 1 };
    console.log(debug, 'test');
    return [debug];
  }
}
