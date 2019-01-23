import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-agents',
  templateUrl: './agentupdate.component.html',
  styleUrls: ['./agentupdate.component.scss']
})
export class AgentupdateComponent implements OnInit {
  /**
   * alert name
   */
  alertName: any;
  /**
   * single agent
   */
  agent: any;
  
  /**
   * create instance of AgentupdateComponent
   * @param route 
   * @param apiService 
   */
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe(params =>
      this.alertName = params['alertName']
    );
  }

  ngOnInit() {
    this.getAgent();
  }

  /**
   * get particular agent
   */
  getAgent() {
    this.apiService.getAgent(this.alertName).subscribe((data: any) => {
      this.agent = { data: data.data[0] };
      console.log(this.agent);
    });
  }

  /**
   * submit form data
   * @param submission 
   */
  onSubmit(submission: any) {
    console.log("form data", submission.data);
    this.apiService.updateAgent(submission.data).subscribe((response) => {
      console.log(response);
    });
  }

}
