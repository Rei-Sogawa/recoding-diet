import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const onDeleteMealRecord = functions.region('asia-northeast1').firestore
    .document('mealRecords/{mealRecordId}')
    .onDelete(async (mealRecordSnap) => {
      console.info(
          await mealRecordSnap.ref
              .collection('reactions')
              .get()
              .then(({docs}) => docs.map((_) => _.id))
      );
    });
