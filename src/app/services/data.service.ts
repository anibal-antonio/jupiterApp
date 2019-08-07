import { IAdd } from './../interfaces/iadd';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/ipost';
import { HttpClient } from '@angular/common/http';
import { Promise } from 'q';
import 'rxjs';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private uri = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.uri}users?page=2`);
  }

  getUsers() {
    return  Promise((resolve, reject) => {
        this.http.get(`${this.uri}users?page=1`).subscribe((data: IPost[]) => {
            resolve(data);

            console.log();


        }, (data) => {
            reject(data);

        });
    });

}

load(page) {
  return  Promise((resolve, reject) => {
      this.http.get(`${this.uri}users?page=${page}`).subscribe((data: IPost[]) => {
          resolve(data);

          console.log();


      }, (data) => {
          reject(data);

      });
  });

}

delete(id) {
  return  Promise((resolve, reject) => {
    this.http.delete(`${this.uri}users/${id}`).subscribe((data: any) => {
        resolve(data);

        console.log(data);


    }, (data) => {
        reject(data);

    });
});
}

getUser(id) {
  return  Promise((resolve, reject) => {
      this.http.get(`${this.uri}users/${id}`).subscribe((data: IPost[]) => {
          resolve(data);

          console.log();


      }, (data) => {
          reject(data);

      });
  });

}

addUser(data) {
  return Promise((resolve, reject) => {
    this.http.post(`${this.uri}users`, data).subscribe((res) => {
      resolve(res);
    });
  });
}

editUser(user: {data: any, id: any}) {
  return Promise((resolve, reject) => {
    this.http.put(`${this.uri}${user.id}`, user.data).subscribe((res) => {
      resolve(res);
    });
  });
}

}
