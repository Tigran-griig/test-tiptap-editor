import React from 'react'
import LargeImageIcon from '../Icons/LargeImageIcon'
import SmallImageIcon from '../Icons/SmallImageIcon'
import MediumImageIcon from '../Icons/MediumImageIcon'

const ImageEditor = () => (
  <div className="w-[124px] h-[44px] bg-stone-900 flex justify-around items-center rounded-[6px] shadow-sm pl-[6px] pr-[6px] pt-[6px] pb-[6px] ">
    <button
      type="button"
      className="text-editor  flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 "
    >
      <SmallImageIcon />
    </button>
    <button
      type="button"
      className="text-editor mr-[8px] ml-[8px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 "
    >
      <MediumImageIcon />
    </button>
    <button
      type="button"
      className="text-editor  flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 "
    >
      <LargeImageIcon />
    </button>
  </div>
)

export default ImageEditor
