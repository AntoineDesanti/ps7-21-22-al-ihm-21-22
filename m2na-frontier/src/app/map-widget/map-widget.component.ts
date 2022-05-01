import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Checkpoint} from "../models/checkpoint.model";

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.scss']
})
export class MapWidgetComponent implements OnInit,OnChanges {
  @Input() checkpoints: Checkpoint[] = [];
  @Input() checkpointsToUpdate: Checkpoint[] = [];
  @Input() public valueToDisplay="maximumFlowPerMinute";

  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let i =0;
    this.checkpoints.forEach(x=> {
      let checkpointUpdated:Checkpoint=this.checkpointsToUpdate[i];
      checkpointUpdated.maximumFlowPerMinute=x.maximumFlowPerMinute;
      checkpointUpdated.isOpen=x.isOpen;
      checkpointUpdated.maximumControllers=x.maximumControllers
      i++;
    })
  }

}
