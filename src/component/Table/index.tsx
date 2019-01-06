import * as React from 'react'
import Header from './Header'
import Body from './Body'
import './style/index.scss'

interface IProps {
  columns: Array<{
    name: string,
    dataIndex?: string | number,
    render?: () => any
  }>,
  data: object[]
}

export class Table extends React.Component<IProps> {
  public render() {
    const {columns = [], data = []} = this.props
    return <table className="bd-table">
      <Header columns={columns} />
      <Body columns={columns} data={data} />
    </table>
  }
}