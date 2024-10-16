import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
})
export class AddBlocComponent {
  nomBloc: string = '';
  capaciteBloc: number = 0;

  constructor(private http: HttpClient) {}

  addBloc() {
    const bloc = { nomBloc: this.nomBloc, capaciteBloc: this.capaciteBloc };
    this.http.post('http://192.168.100.10:8089/tpfoyer/bloc/add-bloc', bloc).subscribe(
      response => {
        console.log('Bloc added:', response);
        // Reset form fields
        this.nomBloc = '';
        this.capaciteBloc = 0;
      },
      error => {
        console.error('Error adding bloc:', error);
      }
    );
  }
}
