import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  value;
  times = ['11:30', '12:00', '12:30'];
  private selectedTimes = [];

  constructor() { }

  ngOnInit() {
  }

  isSelected(time: string): boolean {
    return this.selectedTimes.indexOf(time) > -1;
  }

  select(time) {
    if(this.isSelected(time)) {
      this.selectedTimes.splice(this.selectedTimes.indexOf(time), 1);
      
    } else {
      this.selectedTimes.push(time);
    }
  }

}
