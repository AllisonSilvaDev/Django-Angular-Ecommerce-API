import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  dados: any[] = [];

  @Input() inicio!: number;
  @Input() limite!: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/produtos/').subscribe(
      (res) => {
        this.dados = res;
        console.log(this.dados);
      },
      (error) => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}
