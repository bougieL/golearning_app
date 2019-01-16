import * as React from 'react'
import {Tabs, Title} from '@/component'

export class TabsD extends React.Component {
  public state = {
    list: [{
      label: 'Tab 1',
      value: 1
    }, {
      label: 'Tab 2',
      value: 2
    }, {
      label: 'Tab 3',
      value: 3
    }, {
      label: 'Tab 4',
      value: 4
    }]
  }
  public render() {
    console.log(Tabs.TabPane)
    const {list} = this.state
    return <>
      <Title>Tabs</Title>
      <div className="f-s">
        <Tabs list={list}>
          {/* <TabPane>111</TabPane>
          <TabPane>222</TabPane>
          <TabPane>333</TabPane>
          <TabPane>444</TabPane> */}
          <Tabs.TabPane>111</Tabs.TabPane>
          <Tabs.TabPane>222</Tabs.TabPane>
          <Tabs.TabPane>333</Tabs.TabPane>
          <Tabs.TabPane>444</Tabs.TabPane>
        </Tabs>
      </div>
    </>
  }
}