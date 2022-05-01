import {Component, Input, OnInit} from '@angular/core';
import {Checkpoint} from "../../models/checkpoint.model";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {CheckpointService} from "../../services/checkpoint.service";

@Component({
  selector: 'app-map-checkpoint',
  templateUrl: './map-checkpoint.component.html',
  styleUrls: ['./map-checkpoint.component.scss']
})
export class MapCheckpointComponent {
  @Input() checkpoint!: Checkpoint;
  @Input() valueToDisplay: string = "";
  faTimes=faTimes;

  constructor(private checkPointService: CheckpointService) {}



  isSelected(){
    return this.checkPointService.getSelectedChekpoint()?.id===this.checkpoint.id;
  }

  getValueToDisplay(checkpoint: Checkpoint){
    return checkpoint[this.valueToDisplay as keyof Checkpoint];
  }


  selectCheckpoint() {
    this.checkPointService.setSelectedCheckpoint(this.checkpoint)
  }
}
