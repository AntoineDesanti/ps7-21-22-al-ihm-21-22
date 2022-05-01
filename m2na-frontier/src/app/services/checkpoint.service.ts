import {Injectable, Output} from '@angular/core';
import {Subject, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {Checkpoint} from "../models/checkpoint.model";

@Injectable({
  providedIn: 'root'
})
export class CheckpointService {

  public checkpoints: Checkpoint[] = [];
  public selectedCheckpoint: Checkpoint | undefined;

  public checkpointsObservable = new Subject<Checkpoint[]>();
  public selectedCheckpoint$= new Subject<Checkpoint>();
  static URL =  '/api/checkpoint';

    constructor(public http: HttpClient)
  {
    if(this.selectedCheckpoint != undefined){
      this.selectedCheckpoint$.next(this.selectedCheckpoint);
    }
  }

   fetchCheckpoints(){
      this.http.get<Checkpoint[]>(CheckpointService.URL+'/getAll',{headers: { observe: 'body', responseType: 'json'}})
        .pipe(take(1)).subscribe(
          x=> this.checkpointsObservable.next(x));

  }

  getSelectedChekpoint(){
    return this.selectedCheckpoint;
  }

  setSelectedCheckpoint(checkpoint: Checkpoint){
    this.selectedCheckpoint=checkpoint;
    this.selectedCheckpoint$.next(checkpoint);
  }

  getCheckpointStatus(): Observable<boolean> {
    return this.http.get<boolean>(CheckpointService.URL+'/isOpen/'+this.selectedCheckpoint?.id,{headers: { observe: 'body', responseType: 'json'}});
  }

  setCheckpointStatus(id: string | undefined, status: boolean): Observable<any> {
      console.log("setCheckpointStatus(): ", status.valueOf());
    console.log(CheckpointService.URL+'/setStatus/'+id+"/"+status.valueOf());
    return this.http.get<any>(CheckpointService.URL+'/setStatus/'+id+"/"+status.valueOf(),
      {headers: { observe: 'body', responseType: 'json'}});
  }

  findCheckpointById(id:string){
    this.checkpoints.forEach( x => {
      if(x.id===id){
        return x;
      }
      else{
        return null;
      }
    })
  }
}
