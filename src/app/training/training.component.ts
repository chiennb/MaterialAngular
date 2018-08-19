import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TrainingService } from './training.service';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  exerciseSubscription: Subscription;
  ongoingTraining = false;
  constructor(private trainingSerice: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.trainingSerice.exerciseChanged.subscribe(exercise => {
      if (exercise) {
        this.ongoingTraining = true;
      } else {
        this.ongoingTraining = false;
      }
    })
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }
}
