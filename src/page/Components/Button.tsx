import * as React from 'react'
import {Button, Title} from '@/component'

export class ButtonD extends React.Component {
  public render() {
    return <>
      <Title>Button</Title>
      <div className="f-s">
        <Button type="primary">Primary</Button>
        <span className="b-s" />
        <Button type="success">Success</Button>
        <span className="b-s" />
        <Button type="warning">Warning</Button>
        <span className="b-s" />
        <Button type="error">Error</Button>
      </div>
    </>
  }
}