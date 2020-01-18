import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tutorial",
  templateUrl: "./tutorial.page.html",
  styleUrls: ["./tutorial.page.scss"]
})
export class TutorialPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  home() {
    this.navCtrl.navigateBack("/home");
  }

  root() {
    this.navCtrl.navigateRoot("/home");
  }
}
