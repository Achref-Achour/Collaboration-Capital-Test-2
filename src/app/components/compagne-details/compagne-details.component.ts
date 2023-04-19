import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brands } from 'src/app/model/brands.model';
import { Compagnes } from 'src/app/model/compagnes.model';
import { BrandsService } from 'src/app/services/brands';
import { CampagnesService } from 'src/app/services/campagnes';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-compagne-details',
  templateUrl: './compagne-details.component.html',
  styleUrls: ['./compagne-details.component.css']
})
export class CompagneDetailsComponent implements OnInit {
  campaignId!: number;
  campagnes!: Array<Compagnes> ;
  campagne!: any;
  brands: Array<Brands> = [];
  mediaOptions = [
  {mediaId: 12, name: 'COLLABORATION', value: 'Collaboration'},
  {mediaId: 2, name: 'NEW_PRODUCT_INNOVATION', value: 'New Product/innovation'},
  {mediaId: 4, name: 'PRINT', value: 'Print'},
  {mediaId: 7, name: 'RADIO', value: 'Radio'},
  {mediaId: 8, name: 'SPONSORSHIP', value: 'sponsorship'},
  {mediaId: 5, name: 'WEBSITE', value: 'website'},

  {mediaId: 1, name: 'LABELING_PACKAGING', value: 'Labeling/Packaging'},
  {mediaId: 3, name: 'OOH', value: 'OOH'},
  {mediaId: 6, name: 'PROMOTIONS', value: 'Promotions'},
  {mediaId: 9, name: 'SOCIAL MEDIA', value: 'social media'},
  {mediaId: 10, name: 'TVC/ONLINE VIDEOS', value: 'tvc/online videos'},
  {mediaId: 11, name: 'OTHERS', value: 'others'}

]
  decisionDeadline: string | null | undefined;



  
  constructor(private route: ActivatedRoute,private campagnesService: CampagnesService,private brandsService: BrandsService,private datePipe: DatePipe) { }

  async ngOnInit() {
    this.campaignId = this.route.snapshot.params['id'];
    this.getAllCampagne();
    this.getBrands();

    
  }

  getBrands(){
    this.brandsService.getbrands().subscribe(data => {
      this.brands = data;
    });
  }

  getAllCampagne(): void {
    this.campagnesService.getCampagnes().subscribe(campaigns => {
      this.campagnes = campaigns.requests;
      this.getCampagneById();
    });
  }
  
  getCampagneById(){
      this.campagne = this.campagnes.find(campagne => campagne.requestId == this.campaignId);
      this.campagne.decisionDeadline  = this.datePipe.transform(this.campagne.decisionDeadline,"yyyy-MM-dd");
  }
  isChecked(option: { mediaId: any; }): boolean {
    return this.campagne.media.some((mediaOption: { mediaId: any; }) => mediaOption.mediaId === option.mediaId);
  }



  onCheckboxChange(event: Event, option: any) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.campagne.media.push(option);
    } else {
      this.campagne.media = this.campagne.media.filter((mediaOption: { mediaId: any; }) => mediaOption.mediaId !== option.mediaId);

    }
  }

 


}
