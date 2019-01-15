import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-agents',
  templateUrl: './agentlist.component.html',
  styleUrls: ['./agentlist.component.scss']
})
export class AgentslistComponent implements OnInit {
  

  lists: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAgentsList();
  }

  getAgentsList() {
    this.apiService.getAgentsList().subscribe((data: any) => {
      this.lists = data.data;
      console.log(this.lists);
    });
  }

}
