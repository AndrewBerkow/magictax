import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { TaxService} from '../tax.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    public taxService: TaxService,
  ) { }

  ngOnInit(): void {
  }

  getStarted(): void {
    this.sessionService.checkAuthAndRedirect();
  }

}
