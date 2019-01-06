import * as React from 'react';
import {Input, FormItem, Button, Form} from '@/component';

export default class Login extends React.Component {
  public render() {
    return <Form>
      <FormItem label="username">
        <Input name="username" />
      </FormItem>
      <FormItem label="password">
        <Input name="password" type="password" />
      </FormItem>
      <FormItem>
        <Button type="submit">Login</Button>
      </FormItem>
    </Form>
  }
}