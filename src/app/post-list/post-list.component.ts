import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      title: 'Mon premier post',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'Mon deuxième post',
      description: 'lorem ipsum dolor',
    },
    {
      title: 'Encore un post',
      description: 'lorem ipsum dolor',
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
