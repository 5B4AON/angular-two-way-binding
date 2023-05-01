
export class Chapter {

    title: string;
    content: string;

    constructor() {
        this.title = 'New Chapter';
        this.content = 'No content yet...';
    }

}

export class Book {

    title: string;
    content: Set<Chapter>;

    constructor() {
        this.title = 'New Book';
        this.content = new Set();
    }

}

export class Bookshelf {

    content: Set<Book>;

    constructor() {
        this.content = new Set();
    }

}