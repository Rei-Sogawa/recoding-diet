import firebase from 'firebase/app';

export type MealRecord = {
  date: firebase.firestore.Timestamp;
  content: string;
};

export type MealRecordWithMeta = MealRecord & {
  id: string;
  ref: firebase.firestore.DocumentReference;
};
