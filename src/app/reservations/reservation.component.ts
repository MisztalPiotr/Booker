import { Component, OnInit } from '@angular/core';
import { StudioService } from '../services/studio.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Reservation } from '../services/model/reservation.model';
import { Service } from '../services/model/service.model';
import { Studio } from '../services/model/studio.model';


@Component({
    selector: 'reservations',
    templateUrl: './reservation.component.html',
    styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
    user: firebase.default.User | null;
    reservations;
    studios;
    constructor(
        private studioService: StudioService,
        public afAuth: AngularFireAuth
      ) {
        afAuth.authState.subscribe(user => {
            this.user = user;
            this.studioService.getReservationsByUsername(this.user.email).subscribe((r) =>{
               console.log(r);
               this.reservations = r;
          });

          this.studioService.getStudios().subscribe((s) =>{
            
            this.studios = s;
            
       });
        });
      }

    ngOnInit(): void {
        //this.reservations = this.studioService.getReservationsByUsername(this.user.email);
            
    }
    
    deleteReservation(studio : Studio, service: Service, reservation: Reservation){
      const serviceIndex = studio.service.findIndex(s => s.title === service.title);

      // If the service with the matching title is found
      if (serviceIndex !== -1) {
        // Access the found service
        const foundService = studio.service[serviceIndex];
    
        // Find the index of the reservation within the service based on the username
        const reservationIndex = foundService.reservations.findIndex(r => r.username === reservation.username &&
           r.startDate === r.startDate && reservation.endDate === reservation.endDate && r.confirmed === reservation.confirmed);
    
        // If the reservation with the matching username is found
        if (reservationIndex !== -1) {
          // Remove the reservation from the service
          foundService.reservations.splice(reservationIndex, 1);
          studio.service[serviceIndex].reservations = foundService.reservations;
          this.studioService.editStudioReservations(studio.id, studio);
        }
      }
    }

    

}