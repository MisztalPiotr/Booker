import { Component, OnInit } from '@angular/core';
import { Studio } from '../services/model/studio.model';
import { StudioService } from '../services/studio.service';


@Component({
    selector: 'app-studio-main-page',
    templateUrl: './studio-main-page.component.html',
    styleUrls: ['./studio-main-page.component.css']
})
export class StudioMainPageComponent implements OnInit {
    studios: Studio[];

    constructor(private studioService: StudioService){
        this.studioService.getStudios().subscribe((s) => {
            this.studios = s;
            console.log(this.studios);
          });
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    getStudios(){

    }

}