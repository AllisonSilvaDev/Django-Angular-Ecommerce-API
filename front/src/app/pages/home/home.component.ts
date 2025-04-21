import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardCategoryComponent } from '../../components/card-category/card-category.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, CardListComponent, CardCategoryComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {


}
