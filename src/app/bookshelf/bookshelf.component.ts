import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bookshelf, Book, Chapter } from '../models/Books';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent {

  /**
   * In TypeScript, the exclamation mark acts as a non-null assertion operator.
   * If you use the non-null assertion operator, you can convey to the TypeScript compiler 
   * that the variable is never null or undefined.
   */
  @Input() bookshelf!: Bookshelf; // In TypeScript, the exclamation mark acts as a non-null assertion operator.

  /**
   * For two-way data binding to work, 
   * the @Output() property must use the pattern, 
   * inputChange, where input is the name of the @Input() property.
   */
  @Output() bookshelfChange = new EventEmitter<Bookshelf>();

  /**
   * Utility method for emiting the changed property to all observers.
   */
  notify() {
    this.bookshelfChange.emit(this.bookshelf);
  }

  addBook() {
    this.bookshelf.content.add(new Book());
    this.notify();
  }

  removeBook(b: Book) {
    this.bookshelf.content.delete(b);
    this.notify();
  }

  addChapter(b: Book) {
    b.content.add(new Chapter());
    this.notify();
  }

  removeChapter(b: Book, c: Chapter) {
    b.content.delete(c);
    this.notify();
  }

}
