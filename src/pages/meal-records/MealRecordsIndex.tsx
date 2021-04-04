import { grey, red } from '@ant-design/colors';
import { DeleteOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Popover } from 'antd';
import { format } from 'date-fns';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useHistory } from 'react-router-dom';

import MealRecordReactions from '../../components/MealRecordReactions';
import { mealRecordsRef } from '../../firebaseApp';
import { MealRecordWithMeta } from '../../models/mealRecord';

function Loading() {
  const [mealRecords] = useCollectionData<MealRecordWithMeta>(
    mealRecordsRef.orderBy('date', 'desc'),
    {
      idField: 'id',
      refField: 'ref',
    }
  );

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: 'large', fontWeight: 'bold' }}>食事記録</div>
        <Button type="primary" onClick={() => history.push('meal-records/new')}>
          記録する
        </Button>
      </div>
      <List
        dataSource={mealRecords}
        renderItem={(item) => (
          <List.Item>
            <div style={{ flex: 1 }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'start' }}>
                <Avatar
                  icon={<UserOutlined />}
                  style={{ marginRight: '12px' }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ color: grey[3] }}>
                      {format(item.date.toDate(), 'yyyy/MM/dd HH:mm')}
                    </div>
                    <div>
                      <Popover
                        trigger="click"
                        content={
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              cursor: 'pointer',
                            }}
                            onClick={() => item.ref.delete()}
                          >
                            <DeleteOutlined
                              style={{ color: red[4], marginRight: '8px' }}
                            />
                            <div style={{ color: red[4] }}>Delete</div>
                          </div>
                        }
                      >
                        <Button
                          size="small"
                          shape="circle"
                          icon={<MoreOutlined rotate={90} />}
                        />
                      </Popover>
                    </div>
                  </div>
                  <div>
                    {item.content
                      .split('\n')
                      .filter((_) => _)
                      .join(' ')}
                  </div>
                </div>
              </div>

              <MealRecordReactions mealRecord={item} />
            </div>
          </List.Item>
        )}
      ></List>
    </div>
  );
}

export default <Loading />;
