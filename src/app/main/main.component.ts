import { Component } from '@angular/core';
import { Bookshelf, Book, Chapter } from '../models/Books';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  bookshelf: Bookshelf = new Bookshelf();

  ngOnInit() {
    var b1 = new Book();
    b1.title = 'First Book';
    var b1c1 = new Chapter();
    b1c1.title = 'First Chapter';
    var b1c2 = new Chapter();
    b1c2.title = 'Second Chapter';
    var b1c3 = new Chapter();
    b1c3.title = 'Third Chapter';
    b1.content
      .add(b1c1)
      .add(b1c2)
      .add(b1c3);
    this.bookshelf.content.add(b1);
    var b2 = new Book();
    b2.title = 'Second Book';
    var b2c1 = new Chapter();
    b2c1.title = 'First Chapter';
    var b2c2 = new Chapter();
    b2c2.title = 'Second Chapter';
    b2.content
      .add(b2c1)
      .add(b2c2);
    this.bookshelf.content.add(b2);
  }

  submit() {
    console.log(this.bookshelf.content);
  }

}
