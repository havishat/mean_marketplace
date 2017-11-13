import { Component, OnInit } from '@angular/core';
import { TaskService} from './../task.service';
import { Router } from '@angular/router';
import { User } from './../user';
import { Cameramarket } from './../cameramarket';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  user = new User();
  camera = new Cameramarket(); 

  constructor(private _taskservice: TaskService, private _router: Router) { }

  ngOnInit() {
  }

  Create() {
    this._router.navigate(['/browse'])
    this._taskservice.create(this.camera, data => {
      console.log("camera data",data);
    });
  }

  Update() {
    
  }

}
