import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emailnotification',
  templateUrl: './emailnotification.component.html',
  styleUrls: ['./emailnotification.component.scss']
})
export class EmailnotificationComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }


  onSubmit(submission: any) {

    console.log('subsbsbsbsbsbs', submission.data);
    this.apiService.createEmailNotification(submission.data).subscribe((response) => {
      console.log(response);
    });
  }


}
