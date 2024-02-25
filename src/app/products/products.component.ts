import { Component ,inject,OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  private productsService = inject(ProductsService);
  posts:any=[];
   ngOnInit(): void{
    this.loadProducts();
  }

loadProducts(){
  this.productsService.getProducts().subscribe((posts:any)=>{
    console.log(posts);
    this.posts=posts;
  });
  console.log(this.posts);
}
}
