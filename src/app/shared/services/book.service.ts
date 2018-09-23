import { Injectable } from '@angular/core';
import { BooksModel } from '../models/book.model.ts';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksList: BooksModel[];
  constructor() { }

  getAllBooks(): BooksModel[] {
    this.booksList = [];
    this.booksList.push(new BooksModel(1, 'Keyurs Book', 'My Publishing House', 1, 1987, 440, 23232323));
    return this.booksList;
  }
}
