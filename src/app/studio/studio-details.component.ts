import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import { Studio } from '../services/model/studio.model';
import { StudioService } from '../services/studio.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Reservation } from '../services/model/reservation.model';
import { Service } from '../services/model/service.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-studio-details-page',
    templateUrl: './studio-details.component.html',
    styleUrls: ['./studio-details.component.css']
})
export class StudioDetailsComponent implements OnInit {

  studio: Studio;
  selectedDate: string = new Date().toISOString().split('T')[0];
  options: string[] = [];
  user: firebase.default.User | null;

  constructor(
    private studioService: StudioService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => {
        this.user = user;
      });
  }

  ngOnInit(): void {
    this.studio = this.studioService.currentStudio;
    console.log(this.studio);
    this.options = ['9:00', '10:00', '11:00', '12:00'];
  }
 
  updateOptions(){
    this.options = ['12:00', '24:00', '11:00', '12:00'];
  }

  openSweetAlert(currentService: Service): void {
    Swal.fire({
      title: '',
      html: `
        <label for="datepicker">Wybierz datę:</label>
        <input type="date" id="datepicker" class="form-control">
      `,
      confirmButtonText: 'OK',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      preConfirm: async () => {
        const dateSelect = document.getElementById('datepicker') as HTMLInputElement;
        this.selectedDate = dateSelect.value;
        return {
          date: dateSelect.value,
        };
      }
    }).then((result) => {
      if (result.isConfirmed) {
       
        this.updateOptions();
        
        Swal.fire({
            title: '',
            html: `
            <label for="options">Wybierz godzinę:</label>
            <select id="options" class="form-control">
              ${this.options.map(option => `<option value="${option}">${option}</option>`).join('')}
            </select>
            `,
            confirmButtonText: 'OK',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            preConfirm: async () => {
            const optionsSelect = document.getElementById('options') as HTMLSelectElement;
        
              return {
                option: optionsSelect.value
              };
            }
          }).then((result) => {
            if (result.isConfirmed) {
              // Handle the selected date and option (result.value.date, result.value.option)
              Swal.fire('Twój termin to:', `${this.selectedDate}` + ' ' + `${result.value.option}`, 'success');
              const reservation: Reservation = 
                {
                  username: this.user.email,
                  confirmed: false,
                  startDate: this.selectedDate + " " + result.value.option,
                  endDate: this.selectedDate + " " + result.value.option
                }
              
                const foundService = this.studio.service.find(service => (
                    service.title === currentService.title &&
                    service.description === currentService.description
                  ));
                  
                  if (foundService) {
                    if (!foundService.reservations) {
                        foundService.reservations = []; 
                      }
                    foundService.reservations.push(reservation);
                  } else {
                    console.error('Service not found in the array');
                  }
             
              this.studioService.editStudio(this.studio.id.toString(), this.studio);
            }
          });
      }
    });

    
  }
   
 
}