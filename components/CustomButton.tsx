import React, { Component } from 'react';
interface ButtonTypes {
  children: string,
  paddingX?:number
}
class CustomButton extends Component<ButtonTypes> {
  render() {
    const {children, paddingX} = this.props;
    return (
      <button className={`flex items-center justify-between bg-[#264373] text-[#FFFFFF] p-3 px-${paddingX} rounded-[10px] gap-12`}>{children}</button>
    );
  }
}

(CustomButton as any).defaultProps = {
  paddingX:3
};

export default CustomButton;