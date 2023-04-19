import { Component, Input, OnInit } from '@angular/core';
import { Brands } from 'src/app/model/brands.model';
import { Compagnes } from 'src/app/model/compagnes.model';
import { BrandsService } from 'src/app/services/brands';
import { CampagnesService } from 'src/app/services/campagnes';

@Component({
  selector: 'app-list-of-campagnes',
  templateUrl: './list-of-campagnes.component.html',
  styleUrls: ['./list-of-campagnes.component.css']
})
export class ListOfCampagnesComponent implements OnInit {
  campagnes: Array<Compagnes> = [];
  brands: Array<Brands> = [];
  filteredCampaigns:  Array<Compagnes> = [];
  searchInputValue = '';
  brandFilterValue : any;

  constructor(private campagnesService: CampagnesService,private brandsService: BrandsService ) { }

  ngOnInit(): void {
    this.getcampagnes();
    this.getBrands();
    
  }
  getcampagnes(){
    this.campagnesService.getCampagnes().subscribe(data => {
      this.campagnes = data.requests;
      this.filteredCampaigns = data.requests;
      
    });
  }

  getBrands(){
    this.brandsService.getbrands().subscribe(data => {
      this.brands = data;
    });
  }

  filterCampaigns(): void {
    let filteredCampaigns = this.campagnes;

    if (this.searchInputValue) {
      console.log('searchInputValue');
      
      const searchTerm = this.searchInputValue.toLowerCase();
      filteredCampaigns = filteredCampaigns.filter((campagnes) => {
        return campagnes.campaignName.toLowerCase().includes(searchTerm);
      });
    }

    if (this.brandFilterValue) {
      console.log('brandFilterValue');
      filteredCampaigns = filteredCampaigns.filter((campaign) => {
      console.log('this.brandFilterValue',this.brandFilterValue);
      console.log('campaign.brand.brandId',campaign.brand.brandId);

        return campaign.brand.brandId.toString() === this.brandFilterValue.toString();
      });
    }

    this.filteredCampaigns = filteredCampaigns;
  }

}
