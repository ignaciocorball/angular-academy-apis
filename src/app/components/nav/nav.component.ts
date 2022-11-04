import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// Services
import { StoreService } from '../../services/store.service';
// Modals
import { CartModalComponent } from '../modals/cart-modal/cart-modal.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('cartModal') private cartModal!: CartModalComponent;
  @ViewChild("searchBox") searchBox!: ElementRef;

  activeMenu = false;
  counter = 0;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  onSearchChange(searchValue: any): void {  
    // If input has value, add active class
    searchValue.target.value ? this.searchBox.nativeElement.classList.add('active') : this.searchBox.nativeElement.classList.remove('active');
    // Filter products by input value
    //this.storeService.filterProducts(searchValue.target.value);
  }

  async openCartModal() {
    return await this.cartModal.open();
  }

}
