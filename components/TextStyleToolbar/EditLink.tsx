import React, {FormEvent} from 'react'
import InputCloseIcon from '../Icons/InputCloseIcon'
import InputDoneIcon from '../Icons/InputDoneIcon'
import CopyLinkIcon from '../Icons/CopyLinkIcon'
import {EditLinkProps} from './EditLink.props'

const EditLink = ({
  editMode = false,
  text,
  handleInputChange,
  handleDoneLink,
  handleOpenLink,
  handleCopyLink,
  handleRemoveLink,
  ...props
}: EditLinkProps) => (
  <div className="w-[390px] h-[44px] bg-stone-900 flex justify-between items-center rounded-[6px] shadow-sm pl-[12px] pr-[12px] pt-[11px] pb-[11px] ">
    {editMode && (
      <button
        type="button"
        {...props}
        onClick={handleCopyLink}
        className="mr-[9px] flex items-center justify-center w-[18px] h-[18px]  rounded-[6px]  bg-none hover:bg-stone-800 "
      >
        <CopyLinkIcon />
      </button>
    )}
    <input
      value={text}
      className={`" ${
        editMode ? 'w-[194px]' : 'w-[279px]'
      } h-[22px] bg-stone-900 text-white font-lato text-[16px] outline-none line-[22px]"`}
      placeholder="Type your link"
      disabled={editMode}
      onChange={(event: FormEvent<HTMLInputElement>) =>
          handleInputChange ? handleInputChange(event.currentTarget.value) : null
      }
      {...props}
    />
    <span className="w-[1px] h-[20px] bg-stone-700 ml-[14px] mr-[8px]" />
    {!editMode ? (
      <>
        <button
          type="button"
          {...props}
          onClick={handleRemoveLink}
          className="mr-[4px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 "
        >
          <InputCloseIcon />
        </button>
        <button
          type="button"
          {...props}
          onClick={() => {
            if (text &&  handleDoneLink) {
              handleDoneLink(true)
            }
          }}
          className="mr-[4px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 "
        >
          <InputDoneIcon />
        </button>
      </>
    ) : (
      <>
        <button
          type="button"
          {...props}
          onClick={() => handleDoneLink ? handleDoneLink(false):null}
          className="mr-[4px] flex items-center justify-center w-[32px] h-[22px] text-[16px] rounded-[6px] text-white bg-none hover:bg-stone-800 "
        >
          Edit
        </button>
        <span className="w-[1px] h-[20px] bg-stone-700 ml-[8px] mr-[10px]" />
        <button
          type="button"
          {...props}
          onClick={handleOpenLink}
          className="flex items-center justify-center w-[68px] h-[22px] text-[16px] font-lato  rounded-[6px] text-white bg-none hover:bg-stone-800 "
        >
          Open link
        </button>
      </>
    )}
  </div>
)

export default EditLink
