import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emailnotification',
  templateUrl: './emailnotification.component.html',
  styleUrls: ['./emailnotification.component.scss']
})
export class EmailnotificationComponent implements OnInit {

  /**
   * Creates an instance of EmailnotificationComponent
   * @param apiService 
   */
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  /**
   * submit form data
   * @param submission 
   */
  onSubmit(submission: any) {

    console.log('subsbsbsbsbsbs', submission.data);
    this.apiService.createNotification(submission.data).subscribe((response) => {
      console.log(response);
    });
  }


}
