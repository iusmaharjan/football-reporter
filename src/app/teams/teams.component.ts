import { Component, OnInit } from '@angular/core';

import { TEAMS } from  '../mock/mock-teams'
import Team from '../entities/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = TEAMS;

  constructor() { }

  ngOnInit(): void {
  }

}
