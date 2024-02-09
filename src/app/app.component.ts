import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, TitleCasePipe} from "@angular/common";
import {ProductComponent} from "./components/product/product.component";
import {Product} from "./models/product";
import {ProductsService} from "./services/products.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-test-project';
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {
      console.log(products);
    });
  }
}
