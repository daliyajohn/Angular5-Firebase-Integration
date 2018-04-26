import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: any;
  constructor(db: AngularFireDatabase) {
    db
      .list('/items')
      .snapshotChanges()
      .map(res => {
        this.items = res;
      });
    console.log('falllmllnml', this.items);
  }
}
