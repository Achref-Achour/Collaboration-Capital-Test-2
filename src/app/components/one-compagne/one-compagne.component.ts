import { Component, Input, OnInit } from '@angular/core';
import { Compagnes } from 'src/app/model/compagnes.model';

@Component({
  selector: 'app-one-compagne',
  templateUrl: './one-compagne.component.html',
  styleUrls: ['./one-compagne.component.css']
})
export class OneCompagneComponent implements OnInit {
  @Input()
  campagne!: Compagnes;
  constructor() { }

  ngOnInit(): void {
    console.log(this.campagne);
    
  }

  transform(value: string): string {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.toLocaleString('en-us', { month: 'long' });
    const year = date.getFullYear();
    let suffix = 'th';

    if (day === 1 || day === 21 || day === 31) {
      suffix = 'st';
    } else if (day === 2 || day === 22) {
      suffix = 'nd';
    } else if (day === 3 || day === 23) {
      suffix = 'rd';
    }

    return month + ' ' + day + suffix + ' ' + year;
  }

}
