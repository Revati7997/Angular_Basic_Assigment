import { Component } from "@angular/core";

@Component({
  selector: "first-app",
  templateUrl: "./app.component.html",
  styles: [
    `
      .colorele {
        color: red;
      }
    `
  ],
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular";
  mobparts = {
    id: 1051,
    name: "screengaurd",
    inStock: 5
  };
  employees = [
    {
      id: 101,
      name: "Revati",
      email: "revati36@gmail.com",
      salary: 10,
      isOnline: true
    },
    {
      id: 102,
      name: "Sakshi",
      email: "sakshi01@gmail.com",
      salary: 5,
      isOnline: false
    },
    {
      id: 103,
      name: "Kajal",
      email: "kajal38@gmail.com",
      salary: 15,
      isOnline: true
    },
    {
      id: 104,
      name: "Neha",
      email: "neha45@gmail.com",
      salary: 20,
      isOnline: ""
    }
  ];
  CalcEmp() {
    let sum = 0;
    for (let employee of this.employees) {
      if (employee.id != 0) {
        sum++;
      }
    }
    return sum;
  }
}
