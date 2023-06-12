export class Book {

    private code: string;
    private title: string;
    private author: string;
    private borrowedBy: string;

    constructor(code: string, title: string, author: string, borrowedBy?: string) {
        this.code = code;
        this.title = title;
        this.author = author;
        this.borrowedBy = (!borrowedBy) ? "" : borrowedBy;
    }

    public getCode() { return this.code; }
    public getTitle() { return this.title; }
    public getAuthor() { return this.author; }
    public getBorrowedBy() { return this.borrowedBy; }
    
    public setCode(code: string) { this.code = code; }
    public setTitle(title: string) { this.title = title; }
    public setAuthor(author: string) { this.author = author; }
    public setBorrowedBy(borrowedBy: string) { this.borrowedBy = borrowedBy; }

    public isFree() { return (this.borrowedBy ? false : true) };
    
    public borrow(person: string) { 
        if(this.isFree()) {
            this.setBorrowedBy(person);
        }
    }
    
    public free() {
        if(!this.isFree()) {
            this.setBorrowedBy("");
        }
    }

}