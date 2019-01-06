import * as React from 'react';

interface IProps {
  list: Array<{
    name: string,
    link: string
  }>
}

interface IState {
  active: number
}

export class Tab extends React.Component<IProps, IState> {
  public super(props: IProps) {
    this.state = {
      active: 0
    }
  }
  public render() {
    const {list} = this.props
    return (
      <div>
      {
        list.map(({name, link}, i) => <a key={i} href={link}>{name}</a>)
      }
      </div>
    )
  }
}