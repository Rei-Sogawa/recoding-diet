import { Link } from 'react-router-dom';
import moment from 'moment';

import MealRecordForm from '../../components/MealRecordForm';
import { create } from '../../services/mealRecordsService';

function MealRecordsNew() {
  return (
    <div style={{ width: '480px', margin: '0 auto', padding: '16px 0' }}>
      <div style={{ fontSize: 'large', marginBottom: '16px' }}>
        食事を記録する
      </div>
      <MealRecordForm
        onFinish={(values) => {
          const { date, time, content } = values;
          return create({
            date: moment(
              `${date.format('YYYY-MM-DD')} ${time.format('HH:mm')}`
            ).toDate(),
            content,
          });
        }}
      />
      <Link to="/meal-records">戻る</Link>
    </div>
  );
}

export default MealRecordsNew;
