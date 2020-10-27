import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'home-page',
  template: `<h3>Angular Component Home page</h3>`,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("home component activated");
  }
}
