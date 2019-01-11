import * as React from 'react';
import {Input, FormItem, Button, Form} from '@/component';
import {Binder} from '@/util'
import {loginValidate} from '@/service'

interface IState {
  username: string,
  password: string
}

export default class Login extends React.Component<null, IState> {
  public state = {
    password: '',
    username: '',
  }
  public bd = new Binder(this)
  public handleSubmit = async () => {
    await loginValidate(this.state)
  }
  public render() {
    return <Form>
      <FormItem label="username">
        <Input {...this.bd.text('username')} />
      </FormItem>
      <FormItem label="password">
        <Input {...this.bd.text('password')} type="password" />
      </FormItem>
      <FormItem>
        <Button onClick={this.handleSubmit}>Login</Button>
      </FormItem>
    </Form>
  }
}