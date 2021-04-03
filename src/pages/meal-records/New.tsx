import MealRecordForm from '../../components/MealRecordForm';
import { Link } from 'react-router-dom';

function MealRecordsNew() {
  return (
    <div style={{ width: '480px', margin: '0 auto', padding: '16px 0' }}>
      <div style={{ fontSize: 'large', marginBottom: '16px' }}>
        食事を記録する
      </div>
      <MealRecordForm />
      <Link to="/meal-records">戻る</Link>
    </div>
  );
}

export default MealRecordsNew;
