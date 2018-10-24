import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  useBtn = false;
  books = [];

  createBook: FormGroup; //grabbing entire form and piping into a json format

  constructor(private fb: FormBuilder) {
    //creating a new, private version of FormBuilder, called 'fb', only accessible within this class
    setTimeout(() => {
      this.useBtn = true;
    }, 3000);
  }

  ngOnInit() {
    this.createBook = this.fb.group({
      bookName: new FormControl(),
      author: new FormControl(),
      genre: new FormControl(),
      pubYear: new FormControl(),
      rating: new FormControl()
    });
  }

  onCreateBook() {
    this.books.push(this.createBook.value);
  }
}
