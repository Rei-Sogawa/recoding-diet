import firebase from 'firebase/app';

type Meta = {
  id: string;
  ref: firebase.firestore.DocumentReference;
};

export type MealRecord = {
  date: firebase.firestore.Timestamp;
  content: string;
};

export type MealRecordWithMeta = MealRecord & Meta;

export type Reaction = {
  like: boolean;
  fire: boolean;
};

export type ReactionWithMeta = Reaction & Meta;
