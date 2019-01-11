import * as React from 'react'
import {Modal, IModalProps, Button} from '@/component'
import {Binder} from '@/util'

interface IProps extends IModalProps {
  promise: {
    reject: () => void,
    resolve: () => void,
  },
  willUnmount?: () => void
}

interface IState {
  visible: boolean
}

export class MessageBox extends React.Component<IProps, IState> {
  public state = {
    visible: true
  }
  public bd = new Binder(this)
  public handleFooterClick (action: string) {
    const {promise: {resolve, reject}} = this.props
    if (action === 'cancel') {
      reject()
    } else if(action === 'confirm') {
      resolve()
    }
    this.setState({
      visible: false
    })
  }
  public renderFooter = () => {
    return <>
      <Button onClick={this.handleFooterClick.bind(this, 'cancel')}>取消</Button>
      <Button onClick={this.handleFooterClick.bind(this, 'confirm')}>确定</Button>
    </>
  }
  public render() {
    const {children, title, onCancel} = this.props
    return <Modal
      title={title}
      {...this.bd.modal('visible', onCancel)}
      footer={this.renderFooter}
      >{children}</Modal>
  }
}