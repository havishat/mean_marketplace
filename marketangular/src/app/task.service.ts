import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  loggedUserID = null ;
  loggedUser = null;
  createproduct = null;

    checkUser(user, nav, alert) {
      this.loggedUser = user.firstName;
      this._http.post('/user', user).subscribe(
        (response) => {
          if(response.json()) {
            console.log("nav", response.json())
            this.loggedUserID = response.json().id;
            nav()
          } else {
            alert()
          }
        },
        (error) => {
          console.log('could not retrive all data')
        }
      )
    }

    login(loginObject, nav, alert) {
      console.log("loginObject")
      this.loggedUser = loginObject.firstName;
      this._http.post('/userlogin', loginObject).subscribe(
        (response) => {
          if(response.json()) {
            console.log("nav", response.json())
            this.loggedUserID = response.json()._id;
            console.log("id", this.loggedUserID)
            nav()
          } else{
            alert()
            
          }
          console.log("whats the id ", this.loggedUserID)
        },
        (error) => {
          console.log('could not retrive all data')
        })
      
    }

    create(cameraObject, nav) {
        this._http.post('/product', cameraObject).subscribe(
          (response) => {
            if(response.json()) {
              console.log("nav", response.json())
              nav(response.json());
              this.loggedUserID = response.json()._id;
              console.log("id", this.loggedUserID)
            } 
          },
          (error) => {
            console.log('could not retreive  all product data')
          })

    }

    displayallproduct(callback) {
      this._http.get('/products').subscribe(
        (response) => {
          callback(response.json());   
          console.log("products 2", response.json())   
        },
        (error) => {
          console.log("could not display polls", error)
        }
      );
    }

  }

