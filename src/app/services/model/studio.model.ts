import { Service } from './service.model';



export interface Studio {
    id: string
    studioName: string
    type: string;
    location: string;
    ownerUsername: string;
    service: Service[];
    imageUrl: string;
  }