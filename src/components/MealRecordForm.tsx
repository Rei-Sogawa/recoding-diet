import { Form, Input, Button, TimePicker, DatePicker } from 'antd';
import moment, { Moment } from 'moment';

export type Values = {
  date: Moment;
  time: Moment;
  content: string;
};

export default function MealRecordForm({
  initialValues,
  onFinish,
}: {
  initialValues?: Values;
  onFinish: (values: Values) => void;
}) {
  return (
    <Form
      initialValues={
        initialValues || { date: moment(), time: moment(), content: '' }
      }
      onFinish={onFinish}
    >
      <Form.Item name="date">
        <DatePicker />
      </Form.Item>
      <Form.Item name="time">
        <TimePicker format="HH:mm" />
      </Form.Item>
      <Form.Item name="content" rules={[{ required: true }]}>
        <Input.TextArea rows={5} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          記録
        </Button>
      </Form.Item>
    </Form>
  );
}
