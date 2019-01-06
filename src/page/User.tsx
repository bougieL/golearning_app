import { getAllUser } from '@/service';
import { IUser } from '@/interface';
import * as React from 'react';
import {Table} from '@/component';

interface IState {
  data: IUser[]
}

export default class User extends React.Component<null, IState> {
  constructor(props: null) {
    super(props)
    this.state = {
      data: []
    }
  }
  public async componentDidMount() {
    this.setState({
      data: await getAllUser()
    })
  }
  public render() {
    return <Table columns={[{
      dataIndex: 'id',
      name: 'Id',
    }, {
      dataIndex: 'username',
      name: 'Username'
    }, {
      name: 'Action',
      render: () => {
        return '111'
      }
    }]} data={this.state.data} />
  }
}