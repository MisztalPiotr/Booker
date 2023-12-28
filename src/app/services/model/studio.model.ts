import { Service } from './service.model';



export interface Studio {
    studioName: string
    type: string;
    location: string;
    ownerUsername: string;
    service: Service[];
    imageUrl: string;
  }