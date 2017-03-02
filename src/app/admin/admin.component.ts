import {Component, OnInit} from '@angular/core';
import {adminMenu} from "./admin.menu";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    private menu = adminMenu;

    constructor() {
    }

    ngOnInit() {
    }

}
