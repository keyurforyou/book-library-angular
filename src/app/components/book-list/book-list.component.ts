import { Component, OnInit } from '@angular/core';
import { BooksModel } from '../../shared/models/book.model.ts';
import { BookService } from '../../shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  booksList: BooksModel[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.booksList = this.bookService.getAllBooks();
  }

}
