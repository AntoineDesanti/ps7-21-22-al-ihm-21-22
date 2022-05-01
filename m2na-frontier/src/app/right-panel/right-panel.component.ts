import {Component, Input, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {CheckpointService} from "../services/checkpoint.service";
import {distinct, distinctUntilChanged, first, pipe, Subscription, take} from "rxjs";
import {Checkpoint} from "../models/checkpoint.model";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  selectedCheckpoint: Checkpoint | undefined;
  private checkpointObservable$: Subscription[] = [];

  @Input() checkpoints: Checkpoint[] = [];
  private dropdownCheckpoints: Checkpoint[] = [];

  constructor(private checkpointService : CheckpointService) {
    this.checkpointObservable$.push(this.checkpointService.selectedCheckpoint$.pipe(distinct())
      .subscribe(selected => {
        this.selectedCheckpoint = selected;
      }));
  }

  ngOnInit(): void {
    this.selectedCheckpoint = this.checkpoints[0];
    this.checkpointObservable$.push(this.checkpointService.selectedCheckpoint$.subscribe(s => {
      this.selectedCheckpoint=s;
    }));
    this.getDropdownCheckpoints();
    this.refreshDropdown();
  }

  ngOnDestroy(){
    this.checkpointObservable$.forEach(x => x.unsubscribe());
  }

  setSelectedCheckpoint(checkpoint: MatSelectChange){
    this.checkpointService.selectedCheckpoint$.next(checkpoint.value);
    this.selectedCheckpoint=checkpoint.value;
    this.checkpointService.setSelectedCheckpoint(checkpoint.value);
    this.dropdownCheckpoints = [...this.checkpoints];
  }

  attributeDisplay(attribute1: Checkpoint,attribute2: Checkpoint) {
    if (attribute1?.id == attribute2?.id) {
      return true;
    } else {
      return false;
    }
  }

  getDropdownCheckpoints(): Checkpoint[]{
    return this.dropdownCheckpoints
  }


  getSelectedCheckpoint(){
    return this.selectedCheckpoint;
  }

  toggleCheckpointSetAccess(event: MatSlideToggleChange){
    let toggle = event.source;
    this.checkpointService.setCheckpointStatus(this.selectedCheckpoint?.id, toggle.checked).pipe(take(1)).subscribe();
    if(this.selectedCheckpoint){
      this.selectedCheckpoint.isOpen=toggle.checked;
    }
  }

  refreshDropdown() {
    this.dropdownCheckpoints = [...this.checkpoints];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.selectedCheckpoint = this.checkpoints[0];
      this.refreshDropdown();
    }, 500);
  }

}
