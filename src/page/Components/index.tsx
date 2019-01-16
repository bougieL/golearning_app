import * as React from 'react'
import {ButtonD} from './Button'
import {ModalD} from './Modal'
import {NoticeD} from './Notice'
import {MessageBoxD} from './MessageBox'
import {TableD} from './Table'
import { IconD } from './Icon'
import {TabsD} from './Tabs'

export class Components extends React.Component {
  public render() {
    return <>
      <ButtonD />
      <IconD />
      <ModalD />
      <NoticeD />
      <MessageBoxD />
      <TabsD />
      <TableD />
    </>
  }
}