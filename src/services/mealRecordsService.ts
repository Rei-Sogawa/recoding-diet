import firebase from 'firebase/app';
import { mealRecordsRef } from '../firebaseApp';

type Data = {
  date: firebase.firestore.Timestamp;
  content: string;
};

const create: (payload: {
  date: Date;
  content: string;
}) => Promise<firebase.firestore.DocumentReference> = (payload) => {
  const { date, content } = payload;
  const data: Data = {
    date: firebase.firestore.Timestamp.fromDate(date),
    content,
  };
  return mealRecordsRef.add(data);
};

export { create };
