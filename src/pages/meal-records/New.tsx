import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';

import MealRecordForm from '../../components/MealRecordForm';
import { create } from '../../services/mealRecordsService';

function MealRecordsNew() {
  const history = useHistory();

  return (
    <div style={{ width: '480px', margin: '0 auto', padding: '16px 0' }}>
      <div style={{ fontSize: 'large', marginBottom: '16px' }}>
        食事を記録する
      </div>
      <MealRecordForm
        onFinish={async (values) => {
          const { date, time, content } = values;
          await create({
            date: moment(
              `${date.format('YYYY-MM-DD')} ${time.format('HH:mm')}`
            ).toDate(),
            content,
          });
          history.push('/meal-records');
          return;
        }}
      />
      <Link to="/meal-records">戻る</Link>
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <MealRecordsNew />;

/*
  .map(Child), here Child is being considered as simple function and not as a functional component,
  and map function is invoking it directly
*/
