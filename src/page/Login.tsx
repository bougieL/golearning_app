import * as React from 'react';
import {Input, FormItem, Button, Form, Modal} from '@/component';
import {Binder} from '@/util'
// import {loginValidate} from '@/service'

interface IState {
  username: string,
  password: string,
  visible: boolean
}

export default class Login extends React.Component<null, IState> {
  public state = {
    password: '',
    username: '',
    visible: false
  }
  public bd = new Binder(this)
  public handleSubmit = async () => {
    this.setState({
      visible: true
    })
    // Notice.info({
    //   message: '666666'
    // })
    // const data = {...this.state}
    // data.password = encrypt(data.password)
    // await loginValidate(data)
  }
  public render() {
    return <>
      <Modal title="biaoti" {...this.bd.modal('visible')}>
        1111
      </Modal>
      <Form>
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
    </>
  }
}