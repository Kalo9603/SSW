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

    public find(key: string) {
        return this.list.filter(book => {
            book.getCode().includes(key) ||
            book.getTitle().includes(key) ||
            book.getAuthor().includes(key)
        });
    }

    public add(code: string, title: string, author: string, borrowedBy?: string) {
        if(!this.findBook(code)) {
            this.list.push(new Book(code, title, author, borrowedBy));
        }
    }

    public remove(code: string) {
        if(this.findBook(code).isFree()) {
            this.setList(this.list.filter(book => 
                book.getCode() !== code
            ));
        }
    }

    public borrow(code: string, person: string) {
        if(this.findBook(code).isFree()) {
            this.findBook(code).borrow(person);
        }
    }

    public free(code: string) {
        if(!this.findBook(code).isFree()) {
            this.findBook(code).free();
        }
    }

}

