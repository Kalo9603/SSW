import { Book } from "./Book";
import { ArchiveService } from "../service/archive.service";

export class Archive {

    private list: Array<Book>;
    private data: ArchiveService;

    constructor(data: ArchiveService) {
        
        this.list = new Array<Book>();
        this.data = data;

    // Inizializzo dal server

        try {
            this.data.get().subscribe((res) => {
              let list = JSON.parse(res);
              list.map((x: any) => {
                this.add(x.code, x.title, x.author, x.borrowedBy);
              });
            });

          } catch (e: any) {
            console.error('Errore: ' + e.message);
        }
    }

    public getList() { return this.list; }

    private setList(list: Array<Book>) { this.list = list; }

    public update(data: Archive) {
        this.data.set(JSON.stringify(data.getList())).subscribe();
    }

    public findBook(code: string) {
        return this.list.filter(book => {
            return book.getCode() === code;
        })[0];
    }

    public find(key: string) {
        return this.list.filter(book => {
            return (book.getTitle() + book.getAuthor()).toLowerCase()
                    .includes(key.toLowerCase());
        });
    }

    public countResults(key: string) {
        return this.find(key).length;
    }

    public add(code: string, title: string, author: string, borrowedBy?: string) {
        if(!this.findBook(code)) {
            this.list.push(new Book(code, title, author, borrowedBy));
        }
    }

    public remove(code: string) {
        if(this.findBook(code).isFree()) {
            this.setList(this.list.filter(book => {
                return book.getCode() !== code
            }));
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