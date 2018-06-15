import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, flag) =>
  db.ref(`users/$(id)`).set({
    username,
    email,
    flag,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...
