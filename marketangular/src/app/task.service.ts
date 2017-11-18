import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  loggedUserinfo = null;
  loggedUserID = null ;
  loggedUser = null;
  createproduct = null;
  myproduct = null;
  email =  null;
  name = null;

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
            this.loggedUserinfo = response.json()
            // this.name = response.json().firstName;
            // this.email = response.json().email;
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
            } 
          },
          (error) => {
            console.log('could not retreive  all product data')
          })

    }


    showrandom(callback) {
      this._http.get(`/products/random`).subscribe(
        (response) => {
          callback(response.json())
          console.log("random", response.json())
        }
      )
    }

    showall(callback) {
      this._http.get(`/products`).subscribe(
        (response) => {
          callback(response.json())
          this.email = response.json().email;
          this.name = response.json().name;
          console.log("show all products", response.json())
        }
      )
    }

    showmine(callback) {
      this._http.get(`/product/${this.loggedUserID}`).subscribe(
        (response) => {
          callback(response.json())
          console.log("my products", response.json())
        }
      )
    }

    getID() {
      return this.loggedUserID;
    }

    creator() {
      return this.loggedUserID;
    }

    resetID() {
      this.loggedUserID = null;
    }

//delete product from my lising
    delete(id, callback) {
      this._http.delete(`/product/${id}`).subscribe(
        (response) => {
          callback(response.json())
        }
      )

    }

    update(id, new_update) {
      this._http.put(`/product/${id}`, new_update).subscribe (
        (response) => {
          console.log("updateproduct service",new_update)
      
      })

    }
}

