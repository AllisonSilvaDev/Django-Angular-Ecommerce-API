import { Router } from '@angular/router';
import { VisibleService } from './../../service/visible.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  imports: [FormsModule, CommonModule],
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.css'
})
export class NewproductComponent {
  data: any = {
    nome: '',
    preco: '',
    imagem: ''
  }



  constructor(private http: HttpClient, private visibleService: VisibleService, private router: Router){}


  getVisibility() {
    return this.visibleService.getVisibility(); // Acessando o valor do serviço
  }

  mostrarProduto() {
    this.visibleService.setVisibility(false);
  }


  postNewProduct(){
    this.http.post("http://127.0.0.1:8000/api/produtos/", this.data).subscribe(
      (res) => {
        console.log("Produto Castrado Com Sucesso", res)

      },
      (erro) => {
        console.log("Usuario Nao Cadastrado", erro)
      }
    )
  }
}
