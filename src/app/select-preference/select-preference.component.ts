import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-preference',
  templateUrl: './select-preference.component.html',
  styleUrls: ['./select-preference.component.scss']
})
export class SelectPreferenceComponent implements OnInit {
  value;
  private selectedTimes = [];

  constructor() { }

  ngOnInit() {
  }

  get times() { 
    const increments = ["00", "30"];
    let times = [];
    for(var i = 0; i < 24; i++) {
      for(var j = 0; j < increments.length; j++){
        var time = i + ":" + increments[j];
        if(i < 10){
          time = "0" + time;
        }
        times.push(time);
      }
    }
    return times;
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
