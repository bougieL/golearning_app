import * as React from 'react'
import {Table, Button} from '@/component'
import {getAllContainer} from '@/service'
import * as Terminal from 'xterm'
import 'xterm/dist/xterm.css'
import * as attach from 'xterm/lib/addons/attach/attach'

export class Containers extends React.Component {
  public state = {
    columns: [
      {
        dataIndex: 'Image',
        name: 'Image'
      },
      {
        dataIndex: 'Command',
        name: 'Command'
      },
      {
        dataIndex: 'State',
        name: 'State'
      },
      {
        dataIndex: 'Status',
        name: 'Status'
      },
      {
        name: 'Action',
        render(v: any) {
          return <>
            <Button type="success">Login</Button>
            <span className='b-s' />
            <Button type="error">Delete</Button>
          </>
        }
      }
    ],
    data: []
  }
  private refTerm: React.RefObject<any> = React.createRef()
  public async componentDidMount() {
    this.setState({
      data: await getAllContainer()
    })
    // 
    Terminal.Terminal.applyAddon(attach)
    const term = new Terminal.Terminal()
    term.open(this.refTerm.current)
    console.log(term.element)
    // term.write('')
  }
  public render() {
    const {columns, data} = this.state
    return <>
      <Table columns={columns} data={data} />
      <div ref={this.refTerm} style={{width: '600px', height: '400px'}} />
    </>
  }
}