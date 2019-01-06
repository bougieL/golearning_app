import * as React from 'react'
import './style/index.scss'

interface IProps {
  value?: string | number,
  onChange?: (val: any) => void,
  name?: string,
  placeholder?: string,
  type?: string
}

export class Input extends React.Component<IProps> {
  public handleOnChange = (evt: any) => {
    const {onChange} = this.props
    if (onChange) {
      onChange(evt.target.value)
    }
  }
  public render() {
    const {value, name, placeholder, type = 'text'} = this.props
    return <input 
      className="bd-input" 
      type={type}
      placeholder={placeholder} 
      name={name} 
      value={value} 
      onChange={this.handleOnChange}
    />
  }
}