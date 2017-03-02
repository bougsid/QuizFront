import {Component, OnInit} from '@angular/core';
import {homeMenu} from "./home.menu";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private menu = homeMenu;

    constructor() {
    }

    ngOnInit() {
    }

}
