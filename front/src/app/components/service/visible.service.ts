// visible.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VisibleService {
  private isVisible: boolean = false;

  setVisibility(value: boolean) {
    this.isVisible = value;
  }

  getVisibility() {
    return this.isVisible;
  }
}
