import { IAdd } from './../../interfaces/iadd';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  data = {
    name: 'Hannibal',
    job: 'Desenvolvedor'
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.add(this.data);
  }

  add(data: IAdd) {

    this.dataService.addUser(data);

  }

}
