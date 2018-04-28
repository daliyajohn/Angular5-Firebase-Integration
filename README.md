# Angular5 Firebase Todo App

## What is AngularFire?
The official library for Firebase and Angular
- **Observable based** - Use the power of RxJS, Angular, and Firebase.
- **Realtime bindings** - Synchronize data in realtime.
- **Authentication** - Log users in with a variety of providers and monitor authentication state in realtime.
- **Offline Data** - Store data offline automatically with AngularFirestore.
- **ngrx friendly** - Integrate with ngrx using AngularFire's action based APIs.

Quick Start
-----------

#### Install Angular CLI

```shell
$ npm install -g @angular/cli
```

#### Clone the app, install package dependencies, and start the dev server @ `localhost:4200`

```shell
$ git clone https://github.com/r-park/todo-angular-firebase.git
$ cd todo-angular-firebase
$ npm install
$ npm start
```


## Deploying to Firebase
#### Prerequisites
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

## Install

```bash
npm install firebase angularfire2 --save
```

#### Import in app module

```ts
import { AngularFirestore } from 'angularfire2/firestore';
```

#### Edit the firebase configuration in `src/environments/firebase.ts`

```typescript
export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```
