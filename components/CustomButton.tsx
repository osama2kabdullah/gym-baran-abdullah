import React, { Component } from 'react';

interface ButtonProps {
    children: string
}

class CustomButton extends Component<ButtonProps>  {

    render() {
        const {children} = this.props;
        return (
            <button className='bg-[#264373] text-[#FFFFFF] p-3 px-7 rounded-xl'>{children}</button>
        );
    }
}
export default CustomButton;