import { Component, ViewChild } from '@angular/core';
import { Book, Bookshelf, Chapter } from '../models/Books';
import { JsonStringifier } from 'jackson-js';
import { prettyPrintJson } from 'pretty-print-json';
import { BookshelfComponent } from '../bookshelf/bookshelf.component';

@Component({
  selector: 'app-parent',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @ViewChild('bs1') child!:BookshelfComponent; // Accessing ViewChild using template variable #bs1
  bookshelf: Bookshelf = new Bookshelf();
  output!: string;

  /**
   * We use ngAfterViewInit to make sure that Child has been set.
   * So we can access it and add a new book by calling one of its methods.
   * Alternative we can just create objects at the parent side (i.e. add new Chapter)
   * Since there is two way binding we can then access the new book
   * through this.bookshelf which has been updated automatically.
   * We access the first book by getting an iterator on the Set and calling next().value
   */
  ngAfterViewInit() {
    this.child.addBook();
    var newBook: Book = this.bookshelf.content.values().next().value;
    newBook.title = "Sample Book";
    var newChapter: Chapter = new Chapter();
    newChapter.title = "How to modify content";
    newChapter.content = "Just click on the text and make changes.\nThen press Enter...";
    newBook.content.add(newChapter);
    this.changed();
  }

  addBook() {
    this.child.addBook();
  }

  changed() {
    var context = JsonStringifier.makeDefaultContext();
    var j2s = new JsonStringifier();
    var data = JSON.parse(j2s.stringify(this.bookshelf.content, context));
    this.output = prettyPrintJson.toHtml(data);
  }

}
