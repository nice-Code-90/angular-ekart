import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  //name = 'John Doe';
  addToCart: number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 4,
    pImage: '/assets/images/iphone.jpg',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
  //function for eventBinding:we get data from view

  onNameChange(event: any) {
    // this.name = event.target.value;
    //console.log(event.target.value);
  }
  decrementCartValue() {
    if (this.addToCart > 0) this.addToCart--;
  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStock) this.addToCart++;
  }
}
