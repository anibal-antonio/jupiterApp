import { IPost } from './../../interfaces/ipost';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  post = [];
  page = 1;
  load = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    /* this.data.getPost().subscribe((data) => {
      this.post = data;
      console.log(data);

    }); */


    this.data.getUsers().then((d: any) => {
      console.log(d.data);
      this.post = d.data;

    });
  }

  loadMore() {
    this.page += 1;

    this.data.load( this.page ).then((res: any) =>  {
      //this.post = res.data;
      console.log(res);

      this.post.push(res.data);
      if ( res == null) {
        this.load = false;
      }

    });
  }

  delete(id) {
    console.log(id);

    this.data.delete(id).then((res: any) =>  {
      console.log('Res ', res);

    });
  }

}
