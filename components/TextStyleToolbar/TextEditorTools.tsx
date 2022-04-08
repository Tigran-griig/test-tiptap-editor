import React, {useEffect, useState} from 'react'
import {BubbleMenu} from '@tiptap/react'
import BoldIcon from '..//Icons/BoldIcon'
import ItalicIcon from '..//Icons/ItalicIcon'
import BigTitleIcon from '..//Icons/BigTitleIcon'
import SmallTitleIcon from '..//Icons/SmallTitleIcon'
import QuoteIcon from '..//Icons/QuoteIcon'
import HyperlinkIcon from '..//Icons/HyperlinkIcon'
import StoryNotes from '../Icons/StoryNotes'
import EditLink from './EditLink'
import UseCopyToClipboard from '../constants/CustomHooks/UseCopyToClipboard'

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

const TextEditorTools = ({editor}: any) => {
  const [textSize, setTextSize] = useState(4)
  const [openHyperlink, setOpenHyperlink] = useState(false)
  const [linkValue, setLinkValue] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [, copy] = UseCopyToClipboard()

  useEffect(() => {
    if (editMode) {
      setLink()
    }
  }, [editMode])
  const onUpdate = () => {
    if (editor.isActive('link')) {
      if (editMode) setLinkValue(editor.getAttributes('link').href)
      setOpenHyperlink(true)
    }
    if (!editor.isActive('link')) {
      setLinkValue('')
      setOpenHyperlink(false)
    }
  }

  useEffect(() => {
    editor.on('selectionUpdate', onUpdate)
  }, [])

  const setLink = () => {
    if (linkValue === null) {
      return
    }
    if (linkValue === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange('link').setLink({href: linkValue}).run()
  }
  const openLink = () => {
    setOpenHyperlink(false)
    window.open(linkValue, '_blank')
  }
  const handleCopyLink = () => {
    copy(linkValue)
    setOpenHyperlink(false)
  }
  const handleRemoveLink = () => {
    setLinkValue('')
    editor.chain().focus().unsetLink().run()
    setOpenHyperlink(false)
  }
  return (
    <BubbleMenu editor={editor} tippyOptions={{duration: 100}}>
      {!openHyperlink ? (
        <div className="w-[290px] h-[44px] bg-stone-900 flex justify-around items-center rounded-[6px] shadow-sm pl-[10px] pr-[10px] pt-[6px] pb-[6px] ">
          <button
            type="button"
            onClick={() => {
              editor.chain().focus().toggleBold().run()
            }}
            className={classNames(
              editor.isActive('bold') ? 'text-editor-isActive' : '',
              'text-editor mr-[4px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 ',
            )}
          >
            <BoldIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={classNames(
              editor.isActive('italic') ? 'text-editor-isActive' : '',
              'text-editor mr-[4px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 ',
            )}
          >
            <ItalicIcon />
          </button>
          <span className="w-[1px] h-[20px] bg-stone-700 ml-[8px] mr-[8px]" />
          <button
            type="button"
            onClick={() => {
              if (textSize > 1) {
                editor
                  .chain()
                  .focus()
                  .toggleHeading({level: textSize - 1})
                  .run()
                setTextSize(textSize - 1)
              } else {
                setTextSize(1)
              }
            }}
            className={classNames(
              textSize < 4 ? 'text-editor-isActive' : '',
              'text-editor mr-[4px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 ',
            )}
          >
            <BigTitleIcon />
          </button>
          <button
            type="button"
            onClick={() => {
              if (textSize < 6) {
                editor
                  .chain()
                  .focus()
                  .toggleHeading({level: textSize + 1})
                  .run()
                setTextSize(textSize + 1)
              } else {
                setTextSize(6)
              }
            }}
            className={classNames(
              textSize > 4 ? 'text-editor-isActive' : '',
              'text-editor pt-[4px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 ',
            )}
          >
            <SmallTitleIcon />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setBlockquote().run()}
            className={classNames(
              editor.isActive('blockquote') ? 'text-editor-isActive' : '',
              'text-editor mr-[4px] flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 ',
            )}
          >
            <QuoteIcon />
          </button>
          <span className="w-[1px] h-[20px] bg-stone-700 ml-[8px] mr-[8px]" />
          <button
            type="button"
            onClick={() => setOpenHyperlink(true)}
            className="text-editor flex items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 "
          >
            <HyperlinkIcon />
          </button>
          <button
            type="button"
            className="text-editor flex ml-[4px] items-center justify-center w-[32px] h-[32px]  rounded-[6px]  bg-none hover:bg-stone-800 "
          >
            <StoryNotes />
          </button>
        </div>
      ) : (
        <EditLink
          text={linkValue}
          editMode={editMode}
          handleInputChange={setLinkValue}
          handleDoneLink={setEditMode}
          handleOpenLink={openLink}
          handleCopyLink={handleCopyLink}
          handleRemoveLink={handleRemoveLink}
        />
      )}
    </BubbleMenu>
  )
}

export default TextEditorTools
