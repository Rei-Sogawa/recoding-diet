import { grey, red } from '@ant-design/colors';
import { FireOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { MealRecordWithMeta, ReactionWithMeta } from '../models/mealRecord';

function Loading({ mealRecord }: { mealRecord: MealRecordWithMeta }) {
  const [reactions] = useCollectionData<ReactionWithMeta>(
    mealRecord.ref.collection('reactions'),
    { idField: 'id', refField: 'ref' }
  );

  return (
    <>
      {[reactions].every((_) => _) && (
        <MealRecordReactions mealRecord={mealRecord} reactions={reactions!} />
      )}
    </>
  );
}

function MealRecordReactions({
  mealRecord,
  reactions,
}: {
  mealRecord: MealRecordWithMeta;
  reactions: ReactionWithMeta[];
}) {
  const likeCount = reactions.reduce(
    (total, curr) => total + (curr.like ? 1 : 0),
    0
  );
  const fireCount = reactions.reduce(
    (total, curr) => total + (curr.fire ? 1 : 0),
    0
  );
  const hasLiked: boolean = Boolean(
    reactions.find((_) => _.id === 'current_user_id')?.like
  );
  const hasFired: boolean = Boolean(
    reactions.find((_) => _.id === 'current_user_id')?.fire
  );

  return (
    <div>
      <Space>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            shape="circle"
            icon={<LikeOutlined style={hasLiked ? {} : { color: grey[3] }} />}
            onClick={() =>
              mealRecord.ref.collection('reactions').doc('current_user_id').set(
                {
                  like: !hasLiked,
                  fire: hasFired,
                },
                { merge: true }
              )
            }
          />
          <div style={{ color: grey[3] }}>{likeCount}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            shape="circle"
            icon={
              <FireOutlined
                style={hasFired ? { color: red[5] } : { color: grey[3] }}
              />
            }
            onClick={() =>
              mealRecord.ref.collection('reactions').doc('current_user_id').set(
                {
                  like: hasLiked,
                  fire: !hasFired,
                },
                { merge: true }
              )
            }
          />
          <div style={{ color: grey[3] }}>{fireCount}</div>
        </div>
      </Space>
    </div>
  );
}

export default Loading;
