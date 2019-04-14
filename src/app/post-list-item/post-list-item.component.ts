import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postDescription: string;

  loveIt: number;
  hateIt: number;
  dateCreation = new Date();

  constructor() {
    this.loveIt = 0;
    this.hateIt = 0;

  }

  ngOnInit() {
  }

  getColor() {
    if (this.loveIt > this.hateIt) {
      return 'green';
    } else if (this.hateIt > this.loveIt) {
      return 'red';
    }
  }
}
