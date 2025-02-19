import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../service/products.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(public productService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
