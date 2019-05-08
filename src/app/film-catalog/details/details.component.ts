import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'details-inner',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    @Input() info: string;
    constructor() {
    }

    ngOnInit() {
    }

}
