import { VisibleService } from './../../service/visible.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-listproducts',
  imports: [CommonModule],
  templateUrl: './listproducts.component.html',
  styleUrl: './listproducts.component.css'
})

export class ListproductsComponent {
  dados: any;

  constructor(private http: HttpClient, private visibleService: VisibleService) {}

  getVisibility() {
    return this.visibleService.getVisibility(); // Acessando o valor do serviço
  }

  mostrarProduto() {
    this.visibleService.setVisibility(true);
  }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/produtos/').subscribe(
      (res) => {
        this.dados = res;
        console.log(this.dados);
      }
    );
  }
}
