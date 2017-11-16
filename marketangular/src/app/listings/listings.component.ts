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
  private myproduct = []

  constructor(private _taskservice: TaskService, private _router: Router) { }

  ngOnInit() {

    if(!this._taskservice.getID()){
      this._router.navigate(['']);
    }
    this.showmine()
  }

  Create() {
    this._router.navigate(['/browse'])
    
    this._taskservice.create(this.camera, data => {
      this.camera = new Cameramarket();
      this.showmine()
      console.log("camera data",data);
    });
  }

  showmine() {
    this._taskservice.showmine( data => {
      this.myproduct = data;
    })
  }

  update(id, camera){
    console.log("update" )
    this._taskservice.update(id, camera) 
  }

  delete(id, index){
    console.log("delete" )
    this._taskservice.delete(id, deletedata => { 
      this.myproduct.splice(index,1);

    })
  }


}
