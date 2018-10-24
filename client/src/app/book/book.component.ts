import { OnInit, Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-book",
  // template:`
  //     <h1> Howdy from Book Component<h1>
  // ` //anything greater than 3-4 lines and using HTML here becomes bad practice
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"] //needs to be an array
})
export class BookComponent implements OnInit {
  ngOnInit() {}
  public _book = "";

  @Input()
  set book(book: string) {
    this._book = book;
  }
}
