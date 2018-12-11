import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  constructor() { }

  public saveThoughts(thoughts: Array<String>): void {
    localStorage.setItem('thoughtsList', JSON.stringify(thoughts));
  }
}
