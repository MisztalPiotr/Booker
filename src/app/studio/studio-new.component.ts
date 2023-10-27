import { Component, OnInit } from '@angular/core';
import { Studio } from '../services/model/studio.model';
import { StudioService } from '../services/studio.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-studio-new',
    templateUrl: './studio-new.component.html',
    styleUrls: ['./studio-new.component.css']
})
export class StudioNewComponent implements OnInit {
    
    studioForm: FormGroup;
    newStudio: Studio;
    constructor(private studioService: StudioService){
        this.studioForm = new FormGroup({
            'type': new FormControl('', Validators.required),
            'location': new FormControl('', Validators.required),
            'ownerUsername': new FormControl('', Validators.required)
        });
       
    }
    ngOnInit(): void {
       
    }

    addStudio(){
        this.newStudio = {
            location: this.studioForm.value.location,
            type: this.studioForm.value.type,
            ownerUsername: this.studioForm.value.ownerUsername,
            service:[]
          };
        console.log(this.newStudio)
        this.studioService.addStudio(this.newStudio);
       
    }
   

}