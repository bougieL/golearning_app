import * as React from 'react'
import * as ReactDom from 'react-dom'
import {classNames} from '@/util'
import './style'

export interface IModalProps {
  visible?: boolean,
  title?: string,
  type?: string,
  onCancel?: () => void,
  onOk?: () => void,
  footer?: () => any
}

export class Modal extends React.Component<IModalProps> {
  public static defaultProps = {
    type: 'primary',
    visible: false
  }
  public render() {
    const {children, title, visible, onCancel, footer} = this.props
    return ReactDom.createPortal(
      <div className={classNames("bd-modal-mask", {
        "hide": !visible
      })}>
        <div className="bd-modal">
          <div className="bd-modal-header">
            <span className="bd-modal-title">{title}</span>
            <span className="bd-modal-close" onClick={onCancel}>&times;</span>
          </div>
          <div className="bd-modal-content">{children}</div>
          <div className="bd-modal-footer">{footer ? footer() : null}</div>
        </div>
      </div>, document.body)
  }
}