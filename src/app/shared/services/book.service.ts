import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from 'app/appSettings';
import { Book } from './../models/Book';
import { BookName } from './../models/BookName';
import { Language } from '../models/Language';
import { Type } from '../models/Type';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private getAllBookNameOfUsersInventory_URL = AppSettings.API_ENDPOINT + '/bookName/getAllBookNameOfUsersInventory';
  private getBookNameOfAllBooks_URL = AppSettings.API_ENDPOINT + '/bookName/getBooNameOfAllBooks';
  private getAllBookInDetail_URL = AppSettings.API_ENDPOINT + '/book/getAllBookInDetail';
  private findBook_URL = AppSettings.API_ENDPOINT + '/book/findBook';
  private createNewBook_URL = AppSettings.API_ENDPOINT + '/book/addNewBook';



  constructor(private http: HttpClient) { }

  getAllBookNameOfUsersInventory(): Observable<BookName[]> {
    return this.http.get<BookName[]>(this.getAllBookNameOfUsersInventory_URL);
  }

  getBooNameOfAllBooks(): Observable<BookName[]> {
    return this.http.get<BookName[]>(this.getBookNameOfAllBooks_URL);
  }

  getAllBooksInDetail(): Observable<Book[]> {
    return this.http.get<Book[]>(this.getAllBookInDetail_URL);
  }

  checkIfBookIsPresent(bookName, bookLang, bookType): Observable<Book> {
    return this.http.get<Book>(this.findBook_URL  + '/' + bookName + '/' + bookLang + '/' + bookType);
  }

  createNewBook(bookName, bookLang, bookType, price, abbreviation): Observable <any> {
    const newBook: Book = new Book();
    const lang: Language = new Language();
    lang.id = bookLang;
    const type: Type = new Type();
    type.id = bookType;
    const bn: BookName = new BookName();
    bn.id = bookName;
    newBook.languages = lang;
    newBook.name = bn;
    newBook.type = type;
    newBook.price = price;
    newBook.abbreviation = abbreviation;
    return this.http.post<any>(this.createNewBook_URL, newBook, AppSettings.HTTP_OPTIONS);
  }

}
