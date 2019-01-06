import * as React from 'react'

interface IProps {
  columns: Array<{
    name: string,
    dataIndex?: string | number,
    render?: () => any
  }>,
  data: object[]
}

export default class Body extends React.Component<IProps> {
  public renderRow = (data: object, i: number) => {
    const {columns} = this.props
    return <tr key={i}>
      {
        columns.map((obj, oi) => {
          const {dataIndex, render} = obj
          if (dataIndex) {
            return <td key={oi}>{data[dataIndex]}</td>
          } else if (render) {
            return <td key={oi}>{render()}</td>
          } else {
            return <td key={oi} />
          }
        })
      }
    </tr>
  }
  public render() {
    const {data = []} = this.props
    return <tbody>
      {
        data.map(this.renderRow)
      }
    </tbody>
  }
}