import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  constructor() { }

  public saveThoughts(thoughts: Array<String>): void {
    localStorage.setItem('thoughtsList', JSON.stringify(thoughts));
  }

  public fetchThoughts(): Array<String> {
    let data = JSON.parse(localStorage.getItem('thoughtsList'));
    return data ? data : [];
  }
}
