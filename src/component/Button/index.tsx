import * as React from 'react'
import { classNames } from '@/util'
import './style'

interface IProps {
  children?: string | number,
  onClick?: (evt: any) => void,
  type?: 'primary' | 'disable' | 'warning' | 'error' | 'success'
}

export class Button extends React.Component<IProps> {
  public static defaultProps: Partial<IProps>  = {
    type: 'primary'
  }
  public render() {
    const {children, onClick, type} = this.props
    return <button
      className={classNames('bd-button', `bd-button-${type}`)}
      onClick={onClick}
      type="button"
      disabled={type === 'disable'}>
      {children}
    </button>
  }
}