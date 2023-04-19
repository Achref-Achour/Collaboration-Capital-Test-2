import { Brands } from "./brands.model";

export interface Compagnes {
    advice: boolean;
    affiliate: {
      affiliateId: number;
      name: string;
    };
    brand: Brands;
    campaignDescription: string;
    campaignName: string;
    countries: any[]; 
    createdBy: {
      userInfoId: number;
      name: string;
      email: string;
    };
    createdDate: string;
    decisionDeadline: string;
    decisionDescription: string;
    key: string;
    media: any[]; 
    numberOfAssets: number;
    requestId: number;
    requestStatus: {
      requestStatusId: number;
      name: string;
      value: string;
      step: number;
    };
    submittedBy: any; 
    submittedDate: Date; 
    updatedBy: {
      userInfoId: number;
      name: string;
      email: string;
    };
    updatedDate: string;
    validatedBy: any; 
    validatedDate: Date; 
  }