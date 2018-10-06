import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  items: any[];
  users: any[];

  constructor(private dataServices: DataService) {

  }

  async ngOnInit() {
    this.name = "John Doe...";
    this.age = 31;
    this.items = ["bir", 2, true, "yuppi"];

    await this.dataServices.getPost().then(
      data => this.users = [data]["0"]
    )
    console.log(this.users[0])
  }

  addItems = value => {
    this.items.push(value)
    return false;
  }

  removeItem = (value, index) => {
    this.items = this.items.filter((item, key) => key !== index && item !== value);
    return false;
  }

}