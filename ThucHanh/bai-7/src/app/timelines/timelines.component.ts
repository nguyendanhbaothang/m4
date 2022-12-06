import { Component } from '@angular/core';
import {DateUtilService} from '../service/date-util.service';
@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent {

  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  ngOnInit() {
  }

  onChange(value: any) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
