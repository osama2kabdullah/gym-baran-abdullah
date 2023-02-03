import React, { Component } from "react";

interface ButtonProps {
  children: any;
  gap?: number;
  paddingX?: number;
  background?: string,
  text?: string
}

class CustomButton extends Component<ButtonProps> {
  render() {
    const { children, gap, paddingX, background, text } = this.props;
    return (
      <button className={`bg-[${background}] text-[${text}] p-3 px-${paddingX} rounded-xl flex justify-between items-center gap-${gap}`}>
        {children}
      </button>
    );
  }
}

(CustomButton as any).defaultProps = {
    gap: 24,
    paddingX: 4,
    background: '#264373',
    text: '#FFFFFF'
  };

export default CustomButton;
