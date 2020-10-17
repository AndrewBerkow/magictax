import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: any[];

  constructor() { }

  ngOnInit(): void {

    const links = [
        {title: "1040 Form PDF ", link: "https://www.irs.gov/pub/irs-pdf/f1040.pdf "},
        {title: "1040 Form Instructions PDF ", link: "https://www.irs.gov/pub/irs-pdf/i1040gi.pdf "},
        {title: "W-2 Form ", link: "https://www.irs.gov/pub/irs-pdf/fw2.pdf"},
        {title: "1099-OID Form", link: "https://www.irs.gov/pub/irs-access/f1099oid_accessible.pdf"},
        {title: "1099-INT Form ", link: "https://www.irs.gov/pub/irs-pdf/f1099int.pdf"},
        {title: "1099-R Form", link: "https://www.irs.gov/pub/irs-pdf/f1099r.pdf"},
        {title: "SSA-1099 Form Example. See page 20 of link below", link: "https://www.irs.gov/pub/irs-pdf/p915.pdf"},
        {title: "RRB-1099 Form Example. See page 24 of link below", link: "https://www.irs.gov/pub/irs-pdf/p915.pdf"},
        {title: "Schedule 1 Form, Additional Income or Adjustment to Income", link: "https://www.irs.gov/pub/irs-pdf/f1040s1.pdf"},
        {title: "8895 Form, Qualified Business Income Simple Computation", link: "https://www.irs.gov/pub/irs-prior/f8995--2019.pdf"},
        {title: "8895-A Form, Qualified Business Income Deduction", link: "https://www.irs.gov/pub/irs-dft/f8995a--dft.pdf"},
        {title: "Form 8862, Information To Claim Certain Credits After Disallowance", link: "https://www.irs.gov/pub/irs-pdf/f8862.pdf"},
        {title: "Schedule 3, Additional Credits and Payments", link: "https://www.irs.gov/pub/irs-pdf/f1040s3.pdf"},
        {title: "Schedule 2, Additional Taxes", link: "https://www.irs.gov/pub/irs-pdf/f1040s2.pdf"},
        {title: "W-2G Form, Certain Gambling Winnings", link: "https://www.irs.gov/pub/irs-prior/fw2g--2020.pdf"},
        {title: "Form 8888, Allocation of Refund (Including Savings Bond Purchases)", link: "https://www.irs.gov/pub/irs-pdf/f8888.pdf"},
        {title: "Form 8814, Parents’ Election To Report Child’s Interest and Dividends", link: "https://www.irs.gov/pub/irs-pdf/f8814.pdf"},
        {title: "Form 4972, Tax on Lump-Sum Distributions", link: "https://www.irs.gov/pub/irs-pdf/f4972.pdf"},
        {title: "Form 8863, Education Credits (American Opportunity and Lifetime Learning Credits)", link: "https://www.irs.gov/pub/irs-pdf/f8863.pdf"},
        {title: "Form 8621, Information Returned by a Shareholder of a Passive Foreign Investment Company or Qualified Electing Fund", link: "https://www.irs.gov/pub/irs-pdf/f8621.pdf"},
        {title: "Form 8885, Health Coverage Tax Credit", link: "https://www.irs.gov/pub/irs-pdf/f8885.pdf"},
        {title: "Form 8978, Partner’s Additional Reporting Year Tax", link: "https://www.irs.gov/pub/irs-access/f8978_accessible.pdf"},
        {title: "Section 965 Information", link: "https://www.irs.gov/businesses/section-965-transition-tax"},
        {title: "Schedule 8812, Additional Child Tax Credit", link: "https://www.irs.gov/pub/irs-pdf/f1040s8.pdf"},
    ];

    this.links = links;
  }

}
