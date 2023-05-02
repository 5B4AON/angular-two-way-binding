
export class Chapter {

    title: string;
    content: string;

    constructor() {
        this.title = '';
        this.content = '';
    }

}

export class Book {

    title: string;
    content: Set<Chapter>;

    constructor() {
        this.title = '';
        this.content = new Set();
    }

}

export class Bookshelf {

    content: Set<Book>;

    constructor() {
        this.content = new Set();
    }

}