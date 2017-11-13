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

  constructor(private _taskservice: TaskService, private _router: Router) { }

  ngOnInit() {
    this.displayallproduct()
  }

  displayallproduct() {
    this._taskservice.displayallproduct((data) => {
      this.products = data;
      console.log("products", this.products)
    })
  }

  Logoff() {
    this._router.navigate(['/'])
  }

  Contact() {
    this._router.navigate(['/listings'])
  }

  Delete() {
    this._router.navigate(['/browse'])
  }
}
