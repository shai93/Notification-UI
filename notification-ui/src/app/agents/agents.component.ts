import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  lists: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(submission: any) {
    console.log("form data", submission.data);
    this.apiService.createAgent(submission.data).subscribe((response) => {
      console.log(response);
    });
  }

}
