import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }


  onSubmit(submission:object) {
  
    console.log('subsbsbsbsbsbs',submission.data); 
    this.apiService.createEmailNotification(submission.data).subscribe((response) => {
      console.log(response);
    });
  }
  

}
