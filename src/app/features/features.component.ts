import { Component, OnInit } from '@angular/core';
import { CareerSummaryService } from './careersummary.service';
import { CareerSummary } from './career_summary';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  careersummaries: Observable<CareerSummary[]>;

  constructor(private careerSummaryService: CareerSummaryService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.careersummaries = this.careerSummaryService.getCareerSummaryList();
  }
}
