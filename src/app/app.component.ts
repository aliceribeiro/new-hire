import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public database$: Observable<any>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get("https://randomuser.me/api/?nat=br&seed=5165165165&results=10")
      .subscribe(d=> console.log(d));
    this.database$ = this.http.get("https://randomuser.me/api/?nat=br&seed=5165165165&results=10");
  }

}
