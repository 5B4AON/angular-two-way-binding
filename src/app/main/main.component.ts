import { Component } from '@angular/core';
import { Bookshelf } from '../models/Books';
import { JsonStringifier } from 'jackson-js';
import { prettyPrintJson } from 'pretty-print-json';

@Component({
  selector: 'app-parent',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  bookshelf: Bookshelf = new Bookshelf();
  output!: string;

  changed() {
    var context = JsonStringifier.makeDefaultContext();
    var j2s = new JsonStringifier();
    var data = JSON.parse(j2s.stringify(this.bookshelf.content, context));
    this.output = prettyPrintJson.toHtml(data);
  }

}
