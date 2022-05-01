import {Component, OnDestroy, OnInit} from '@angular/core';
import {CheckpointService} from "../services/checkpoint.service";
import {Checkpoint} from "../models/checkpoint.model";
import {distinct, distinctUntilChanged, Subscription, take} from "rxjs";

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  showFiller = true;

  public checkpoints: Checkpoint[] = [];
  public subscriptions: Subscription[] = [];
  public constCheckpoints: Checkpoint[]= []
  interval: any;

  constructor(private checkPointService :CheckpointService) {}

   ngOnInit(): void {
    this.checkPointService.fetchCheckpoints();
    this.checkPointService.checkpointsObservable
      .pipe(distinctUntilChanged((a, b) => JSON.stringify(a) ===
        JSON.stringify(b)))
      .subscribe(fetchedCheckpoints => {
          this.checkpoints = fetchedCheckpoints;
        }
      );
    this.checkPointService.checkpointsObservable.pipe(take(1)).subscribe(
      checkpoints => {
        this.constCheckpoints = checkpoints;
        this.checkPointService.setSelectedCheckpoint(this.constCheckpoints[0]);
      });
    this.interval = setInterval(() => {this.checkPointService.fetchCheckpoints() }, 350);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    clearInterval(this.interval);
  }
}
