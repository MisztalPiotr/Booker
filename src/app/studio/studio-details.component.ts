import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import { Studio } from '../services/model/studio.model';
import { StudioService } from '../services/studio.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-studio-details-page',
    templateUrl: './studio-details.component.html',
    styleUrls: ['./studio-details.component.css']
})
export class StudioDetailsComponent implements OnInit {

  studio: Studio;
  selectedDate: string = new Date().toISOString().split('T')[0];
  options: string[] = [];

  constructor(
    private studioService: StudioService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.studio = this.studioService.currentStudio;
    this.options = ['9:00', '10:00', '11:00', '12:00'];
  }
 
  updateOptions(){
    this.options = ['12:00', '24:00', '11:00', '12:00'];
  }
  openSweetAlert(): void {
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
            }
          });
      }
    });

    
  }
   
 
}