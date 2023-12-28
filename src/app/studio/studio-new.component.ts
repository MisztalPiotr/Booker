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
    imageUrl: string | null = null; 
    imageServiceUrl : string | null = null; 
    imageForm: FormGroup;
    imageServiceForm: FormGroup;
    selectedFileName: string | null = null;
    selectedServiceFileName: string | null = null;

    selectedFile: File | undefined;  
    selectedServiceFile: File | undefined;  
    newStudio: Studio = {
        studioName: "",
        location:  "",
        type: "",
        ownerUsername: "",
        service:[],
        imageUrl:"",
      };
    businessTypes: string[] = ['makeup', 'hairdresser', 'all']; 

    constructor(private studioService: StudioService, private router: Router){
        this.studioForm = new FormGroup({
            'studioName': new FormControl('', Validators.required),
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
        this.imageServiceForm = new FormGroup({
            'serviceFile': new FormControl(['']),
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
        this.newStudio.studioName = this.studioForm.value.studioName,
        //console.log(this.newStudio)
        this.studioService.addStudio(this.newStudio);   
    }

    addService(){
        const newService = {
            title: this.serviceForm.value.title,
            description: this.serviceForm.value.description,
            imageUrl: this.imageServiceUrl,
            reservations: []
          };
        console.log(newService)
        this.newStudio.service.push(newService)
        this.imageServiceUrl = null;
        this.selectedServiceFileName = null;
    }

    deleteService(title: String, description: String){
        this.newStudio.service = this.newStudio.service.filter(service => !(service.title === title &&  service.description === description));
    }
    onFileChange(event: Event){

    }
    handleFileInput(event: any): void {
        this.selectedFile = event.target.files[0] as File;
        this.selectedFileName = this.selectedFile.name;
    }
    
    uploadImage(): void {
        if (this.selectedFile) {
          const reader = new FileReader();
    
          reader.onload = (e: any) => {
            this.imageUrl = e.target.result;
          };
    
          reader.readAsDataURL(this.selectedFile);
           this.studioService.uploadFile(this.selectedFile).then((imageUrl) => {
            this.newStudio.imageUrl = imageUrl;
           });
           
        }
      }

      handleFileServiceInput(event: any): void {
        this.selectedServiceFile = event.target.files[0] as File;
        this.selectedServiceFileName = this.selectedServiceFile.name;
    }

      uploadServiceImage(): void {
        if (this.selectedServiceFile) {
          const reader = new FileReader();
    
          reader.onload = (e: any) => {
            this.imageServiceUrl = e.target.result;
          };
    
          reader.readAsDataURL(this.selectedServiceFile);
           this.studioService.uploadServiceFile(this.selectedServiceFile).then((imageServiceUrl) => {
            this.imageServiceUrl = imageServiceUrl;
           });
           
        }
      }
}