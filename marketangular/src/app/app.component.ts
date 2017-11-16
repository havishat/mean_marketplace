import { Component } from '@angular/core';
import { TaskService} from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private loggedUserID = null;

  constructor(private _taskservice: TaskService) { }
  ngOnInit() {

  }

  updateID() {
    this.loggedUserID = this._taskservice.getID();

  }

  resetID() {
    this._taskservice.resetID();
  }
}
