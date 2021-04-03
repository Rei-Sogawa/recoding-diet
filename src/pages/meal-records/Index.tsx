import { useHistory } from 'react-router-dom';
import { Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { mealRecordsRef } from '../../firebaseApp';
import { MealRecordWithMeta } from '../../models/mealRecord';

function Loading() {
  const [mealRecords] = useCollectionData<MealRecordWithMeta>(mealRecordsRef, {
    idField: 'id',
    refField: 'ref',
  });

  return (
    <>
      {[mealRecords].every((_) => _) && (
        <MealRecordsIndex mealRecords={mealRecords!} />
      )}
    </>
  );
}

function MealRecordsIndex({
  mealRecords,
}: {
  mealRecords: MealRecordWithMeta[];
}) {
  const history = useHistory();

  return (
    <div style={{ width: '480px', margin: '0 auto', padding: '16px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 'large' }}>食事記録</div>
        <Button type="primary" onClick={() => history.push('meal-records/new')}>
          記録する
        </Button>
      </div>
      <List
        dataSource={mealRecords}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => item.ref.delete()}
              />,
            ]}
          >
            <List.Item.Meta
              title={item.content.split('\n').join(' ')}
              description={format(item.date.toDate(), 'yyyy/MM/dd HH:mm')}
            ></List.Item.Meta>
          </List.Item>
        )}
      ></List>
    </div>
  );
}

export default <Loading />;
