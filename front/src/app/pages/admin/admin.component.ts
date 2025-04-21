import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../../components/admin/header-admin/header-admin.component';
import { ListproductsComponent } from '../../components/admin/listproducts/listproducts.component';
import { NewproductComponent } from '../../components/admin/newproduct/newproduct.component';

@Component({
  selector: 'app-admin',
  imports: [HeaderAdminComponent, ListproductsComponent, NewproductComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
