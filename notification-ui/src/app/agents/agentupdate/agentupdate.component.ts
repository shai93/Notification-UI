import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-agents',
  templateUrl: './agentupdate.component.html',
  styleUrls: ['./agentupdate.component.scss']
})
export class AgentupdateComponent implements OnInit {
  
  alertName:any;
  agent: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe(params => 
      this.alertName = params['alertName']
      );
  }

  ngOnInit() {
    this.getAgent();
  }

  getAgent() {
    this.apiService.getAgent(this.alertName).subscribe((data: any) => {
      this.agent = {data:data.data[0]};
      console.log(this.agent);
    });
  }

  onSubmit(submission: any) {
    console.log("form data", submission.data);
    this.apiService.updateAgent(submission.data).subscribe((response) => {
      console.log(response);
    });
  }

}
