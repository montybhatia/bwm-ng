import { Component, OnInit, Input } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  //rentals: any[] = [1,2,3,4];

  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();
    
    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;

      },
      (err) => {

      },
      () => {

      });
  }

}
