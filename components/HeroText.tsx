import React, { Component } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

interface HerosText {
    head: string,
    para: string,
    headSize?: number
  }

class HeroText extends Component<HerosText> {
    render() {
        const {head, para, headSize} =this.props;
        return (
            <div className='flex-col'>
                <h1 className={`md:text-[${headSize}px] text-[28px] font-[400]`}>{head}</h1>
                <p className='text-[#8382EB] my-6 text-[16px]'>{para}</p>
                <button className='flex items-center justify-between bg-[#264373] text-[#FFFFFF] p-3 rounded-[10px] gap-12'>Get started <HiOutlineArrowRight /></button>
            </div>
        );
    }
}

(HeroText as any).defaultProps = {
    headSize: 46,
    paddingX: 4,
    background: '#264373',
    text: '#FFFFFF'
  };

export default HeroText;