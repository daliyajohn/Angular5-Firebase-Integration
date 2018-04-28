import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: any;

  constructor(private db: AngularFireDatabase) {}
  fetchAgain() {
    this.items = this.db
      .list('items')
      .valueChanges()
      .map(res => {
        console.log(res);
      });
    console.log(this.items);
  }
}
