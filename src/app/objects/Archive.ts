import { Book } from "./Book";

export class Archive {

    private list: Array<Book>;

    constructor() {
        this.list = new Array<Book>();
    }

    public getList() { return this.list; }

    private setList(list: Array<Book>) { this.list = list; }

    public size() { return this.list.length; }

    public findBook(code: string) {
        return this.list.filter(book => {
            book.getCode() === code;
        })[0];
    }

    public add(code: string, title: string, author: string, borrowedBy?: string) {
        if(!this.findBook(code)) {
            this.list.push(new Book(code, title, author, borrowedBy));
        }
    }

    

}

