import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
})
export class BlocListComponent implements OnInit {
  blocs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getBlocs();
  }

  getBlocs() {
    this.http.get('http://192.168.100.10:8089/tpfoyer/bloc/retrieve-all-blocs').subscribe(
      (response: any) => {
        this.blocs = response;
      },
      (error) => {
        console.error('Error fetching blocs:', error);
      }
    );
  }
}
