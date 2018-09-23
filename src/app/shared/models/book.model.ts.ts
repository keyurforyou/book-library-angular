export class BooksModel {
    ID: number;
    Title: string;
    Publisher: string;
    Edition: number;
    Year: number;
    Price: number;
    ISBN: string;

    constructor(id, title, publisher, edition, year, price, isbn) {
        this.ID = id;
        this.Title = title;
        this.Publisher = publisher;
        this.Edition = edition;
        this.Year = year;
        this.Price = price;
        this.ISBN = isbn;
    }
}
