import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {HttpClient} from '@angular/common/http';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
  response: string | undefined;

    constructor(private http: HttpClient) {
      // this.http.get<any>("http://localhost:3000/obtenirResposta").subscribe((response)=>{
      //   this.response = response.text;
      //   console.log(response);
      // });
    }

  cridaAPI(){
    this.http.get<any>("http://localhost:3000/obtenirResposta").subscribe((response)=>{
      this.response = response;
      console.log(response);
    });
  }
}
