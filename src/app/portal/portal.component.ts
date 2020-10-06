import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionService } from '../session.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(
    private router: Router,
    private sessionService: SessionService
    ) { }

  ngOnInit(): void {
  }

  getStarted(): void {
    this.sessionService.checkAuthAndRedirect();
  }

}
