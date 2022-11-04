import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  @ViewChild('cartModal') private cartModal!: TemplateRef<CartModalComponent>;

  private modalRef!: NgbModalRef;

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }


  // Modal Functions
  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.cartModal, { size: 'md' })
      this.modalRef.result.then(
        (result) => { console.log(result); }, 
        (reason) => { console.log(reason); }
      );
    })
  }
  
  closeModal(){
    this.modalService.dismissAll('cartModal');
  }
}
