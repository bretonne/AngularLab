import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  userName='UserName';
  myUserName='';
  hasUserName = false;

  constructor() { }

  ngOnInit() {
  }
 

  onAddUser()
  {
    this.myUserName = this.userName;
  }
}
