
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AngularFireDatabase } from '@angular/fire/database'; // Import AngularFireDatabase

import { Studio } from './model/studio.model';
import { Reservation } from './model/reservation.model';
import { Service } from './model/service.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StudioService {
    constructor(private db: AngularFireDatabase, private router: Router) {}

    getStudios(): Observable<Studio[]> { // Specify the return type as User[]
        return this.db.list('studios').valueChanges() as Observable<Studio[]>;
      }

      addStudio(user: Studio) {
        this.getNewId().then((newId) => {
          this.db.list('studios').set(newId.toString(), user)
            .then(() => {
              this.router.navigate(['/']);      
            })
            .catch((error) => {
              console.error('Error adding user:', error);
            });
        });
      }
    
      getNewId(): Promise<number> {
        return new Promise((resolve, reject) => {
          this.db.list<number>('studios').query.once('value')
            .then((snapshot) => {
              let highestNumber = 0;
    
              snapshot.forEach((userSnapshot) => {
                const userId = parseInt(userSnapshot.key, 10);
                if (!isNaN(userId) && userId > highestNumber) {
                  highestNumber = userId;
                }
              });
    
              const nextAvailableNumber = highestNumber + 1;
              console.log('Next available number:', nextAvailableNumber);
              resolve(nextAvailableNumber);
            })
            .catch((error) => {
              console.error('Error fetching user data:', error);
              reject(error);
            });
        });
      }
      
     addTestStudio(){
        const reservations: Reservation[] = [
            {
              username: 'user1',
              confirmed: true,
              startDate: '2023-10-01 08:30',
              endDate: '2023-10-01 09:00'
            },
            {
              username: 'user2',
              confirmed: false,
              startDate: '2023-10-01 09:30',
              endDate: '2023-10-01 10:00'
            },
            // Add more reservations as needed...
          ];
          
          // Sample Service objects
          const services: Service[] = [
            {
              title: 'Service 1',
              description: 'Description for Service 1',
              reservations: reservations,
            },
            {
              title: 'Service 2',
              description: 'Description for Service 2',
              reservations: [],
            },
            // Add more services as needed...
          ];
          
          // Sample Studio object
          const studio: Studio = {
            type: 'Studio Type',
            location: 'Studio Location',
            ownerUsername: 'owner123',
            service: services,
          };
              
          // Add the test user using the service
          this.addStudio(studio);
     } 
}