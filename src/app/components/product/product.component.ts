import {Component, Input} from "@angular/core";
import {Product} from "../../models/product";
import {CurrencyPipe, DecimalPipe, NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass,
    DecimalPipe
  ],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  // "strictPropertyInitialization": false,
  @Input() product: Product;
  details = false;
}
