import { IPost } from './../../interfaces/ipost';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private id: any;

  user: IPost[] = [];

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
  }

  ngOnInit() {
    this.data.getUser(this.id).then((res: any) => {
      this.user = res.data;
      console.log(res);

    });
  }

}
