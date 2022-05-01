import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {Checkpoint} from "../models/checkpoint.model";
import {CheckpointService} from "../services/checkpoint.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  faAngleRight=faAngleRight;
  faAngleLeft=faAngleLeft;

  @Input() checkpointsToUpdate: Checkpoint[] = [];
  @Input() checkpoints: Checkpoint[]= []
  @Output() openRightPanel = new EventEmitter<boolean>();
  private rightPanelOpen = true;
  public selectedModelAttribute = "maximumFlowPerMinute";

  constructor(private checkpointService: CheckpointService) {

  }

  ngOnInit(): void {
  }

  onClickOpenRightPanel(){
    this.rightPanelOpen = !this.rightPanelOpen;
    this.openRightPanel.emit(this.rightPanelOpen)
  }
  isRightPanelOpen(){
    return this.rightPanelOpen;
  }

  getSelectedCheckpoint(): Checkpoint | undefined{
    if(this.checkpointService.getSelectedChekpoint()){
      // @ts-ignore
      return <Checkpoint>this.checkpoints.find(checkpoint => checkpoint.id === this.checkpointService.getSelectedChekpoint().id);
    }
    return undefined;
  }

  changeSelectedModelAttribute(event: string) {
    this.selectedModelAttribute = event;
  }

}
