import * as React from 'react';

interface IProps {
  columns: Array<{
    name: string,
    dataIndex?: string | number
  }>
}

export default class Header extends React.Component<IProps> {
  public render() {
    const {columns} = this.props
    return <thead>
      <tr>
        {
          columns.map(({name, dataIndex}, i) => {
            return <th key={i} data-index={dataIndex}>{name}</th>
          })
        }
      </tr>
    </thead>
  }
}