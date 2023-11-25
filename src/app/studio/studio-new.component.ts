import { Component, OnInit } from '@angular/core';
import { Studio } from '../services/model/studio.model';
import { StudioService } from '../services/studio.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-studio-new',
    templateUrl: './studio-new.component.html',
    styleUrls: ['./studio-new.component.css']
})
export class StudioNewComponent implements OnInit {
    
    studioForm: FormGroup;
    serviceForm: FormGroup;
    imageForm: FormGroup;
    newStudio: Studio = {
        location:  "",
        type: "",
        ownerUsername: "",
        service:[]
      };
    businessTypes: string[] = ['makeup', 'hairdresser', 'all']; 

    constructor(private studioService: StudioService, private router: Router){
        this.studioForm = new FormGroup({
            'type': new FormControl('', Validators.required),
            'location': new FormControl('', Validators.required),
            'ownerUsername': new FormControl('', Validators.required)
        });

        this.serviceForm = new FormGroup({
            'title': new FormControl('', Validators.required),
            'description': new FormControl('', Validators.required),
        });
        this.imageForm = new FormGroup({
            'file': new FormControl(['']),
          });
       
    }
    ngOnInit(): void {
       
    }

    addStudio(){
        console.log(this.studioForm);
        console.log(this.newStudio)
        this.newStudio.location = this.studioForm.value.location,
        this.newStudio.type = this.studioForm.value.type,
        this.newStudio.ownerUsername =  this.studioForm.value.ownerUsername,
        //console.log(this.newStudio)
        this.studioService.addStudio(this.newStudio);   
    }

    addService(){
        const newService = {
            title: this.serviceForm.value.title,
            description: this.serviceForm.value.description,
            reservations: []
          };
        console.log(newService)
        this.newStudio.service.push(newService)
    }

    deleteService(title: String, description: String){
        this.newStudio.service = this.newStudio.service.filter(service => !(service.title === title &&  service.description === description));
    }
    onFileChange(event: Event){

    }
    uploadImage(){
        
    }
}