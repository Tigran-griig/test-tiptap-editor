import {Dispatch, SetStateAction} from 'react'

export interface EditLinkProps {
  editMode?: boolean
  text?: string
  removeInput?: boolean
  handleInputChange?: Dispatch<SetStateAction<string>>
  handleDoneLink?: Dispatch<SetStateAction<boolean>>
  handleOpenLink?: () => void
  handleCopyLink?: () => void
  handleRemoveLink?: () => void
}
