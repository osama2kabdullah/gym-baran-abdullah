import React, { Component } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { IoMdArrowDroprightCircle } from "react-icons/io";

interface HerosText {
    head: string,
    para: string,
    headSize?: number,
    secondButton?:boolean 
  }

class HeroText extends Component<HerosText> {
    render() {
        const {head, para, headSize, secondButton} =this.props;
        return (
            <div className='flex-col'>
                <h1 className={`md:text-[${headSize}px] text-[28px] font-[400]`}>{head}</h1>
                <p className='text-[#8382EB] my-6 text-[16px]'>{para}</p>
                <div className='flex items-center gap-2'>
                <button className='flex items-center justify-between bg-[#264373] text-[#FFFFFF] p-3 rounded-[10px] md:gap-12 gap-6'>Get started <HiOutlineArrowRight size={18}/></button>
                {secondButton?<button className='flex items-center justify-between bg-[#FFFFFF] text-[#264373] p-3 rounded-[10px] gap-4'>
                <IoMdArrowDroprightCircle size={18} color={'#264373'}/>
                Learn more </button>:''}
                </div>
            </div>
        );
    }
}

(HeroText as any).defaultProps = {
    headSize: 46,
    paddingX: 4,
    background: '#264373',
    text: '#FFFFFF',
    secondButton: false
  };

export default HeroText;