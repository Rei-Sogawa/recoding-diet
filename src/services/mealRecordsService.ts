import firebase from 'firebase/app';
import { mealRecordsRef } from '../firebaseApp';
import { MealRecord } from '../models/mealRecord';

const create: (payload: {
  date: Date;
  content: string;
}) => Promise<firebase.firestore.DocumentReference> = (payload) => {
  const { date, content } = payload;
  const data: MealRecord = {
    date: firebase.firestore.Timestamp.fromDate(date),
    content,
  };
  return mealRecordsRef.add(data);
};

export { create };
