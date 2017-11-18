import { Component, OnInit } from '@angular/core';
import { TaskService} from './../task.service';
import { Router } from '@angular/router';
import { User } from './../user'
import { Cameramarket } from './../cameramarket'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  private products;
  user = new User();
  camera = new Cameramarket();
  loggedUserID 
  email
  name

  constructor(private _taskservice: TaskService, private _router: Router) { }

  ngOnInit() {
    if(!this._taskservice.getID()){
      this._router.navigate(['']);
    } else {
      this.showall()
    }
    
  }

  showall() {
    this.loggedUserID = this._taskservice.getID();
    console.log("user id", this.loggedUserID)
    this._taskservice.showall((data) =>  {
      this.products = data
      console.log("products", this.products)
    })
  
  }

  delete(id, index){
    console.log("delete" )
    this._taskservice.delete(id, deletedata => { 
      this.products.splice(index,1);

    })
  }

  Contact(email, firstName) {
    alert("Name:" + firstName  + "email:" + email )
  }

}
