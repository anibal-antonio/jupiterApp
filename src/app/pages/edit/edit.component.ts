import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  data = {
    name: '',
    job: ''
  };

  id: any;

  showMessage = false;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
  }

  ngOnInit() {
    /* this.data.getUser(this.id).then((res: any) => {
      this.data = res.data;
      console.log(res);

    }); */
  }

  edit(data) {

    const temp = {
      id: this.id,
      data: this.data
    };
    this.dataService.editUser(temp).then((data) => {
      this.showMessage = true;
    });
  }

}
