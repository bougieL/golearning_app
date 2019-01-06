import * as React from 'react'
import './style/index.scss'

interface IProps {
  label?: string,
  labelWith?: number,
  children?: any
}

export class FormItem extends React.Component<IProps> {
  public render() {
    const {label, labelWith, children} = this.props
    return <div className="bd-formitem">
      <div 
        className="bd-formitem-label" 
        style={{
          width: labelWith + 'px'
        }}
      >{label}</div>
      {children}
    </div>
  }
}