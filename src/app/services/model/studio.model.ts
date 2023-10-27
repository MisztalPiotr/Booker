import { Service } from './service.model';



export interface Studio {
    type: string;
    location: string;
    ownerUsername: string;
    service: Service[];
  }