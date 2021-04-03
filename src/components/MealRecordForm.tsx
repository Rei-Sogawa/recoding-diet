import { Form, Input, Button, TimePicker, DatePicker } from 'antd';

export default function MealRecordForm() {
  return (
    <Form onFinish={(values) => console.log(values)}>
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
