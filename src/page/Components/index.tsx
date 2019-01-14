import * as React from 'react'
import {ButtonD} from './Button'
import {ModalD} from './Modal'
import {NoticeD} from './Notice'
import {MessageBoxD} from './MessageBox'
import {TableD} from './Table'

export default class Components extends React.Component {
  public render() {
    return <>
      <ButtonD />
      <ModalD />
      <NoticeD />
      <MessageBoxD />
      <TableD />
    </>
  }
}