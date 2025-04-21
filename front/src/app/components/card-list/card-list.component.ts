import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})

export class CardListComponent implements OnInit{
  dados: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/produtos/').subscribe(
      (res) => {
        this.dados = res;
        console.log(this.dados);
      }
    );
  }
}
