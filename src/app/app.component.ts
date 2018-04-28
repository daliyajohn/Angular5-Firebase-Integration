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

  constructor(private db: AngularFireDatabase) {
    this.db
      .list('/items')
      .snapshotChanges()
      .map(res => {
        console.log(res);
      });
    // .snapshotChanges()
    // .pipe(
    //   map(res => {
    //     this.items = res;
    //     console.log('falllmllnml', this.items);
    //   }),
    //   catchError((error: any) => {
    //     console.log(error.json());
    //     return Observable.throw(error.json());
    //   })
    // );
  }
}
