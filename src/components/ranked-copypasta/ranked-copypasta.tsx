import { Component, createSignal } from 'solid-js'
import { RankedCopypastaProps } from '~/components/ranked-copypasta/ranked-copypasta.interfaces'
import styles from '~/components/ranked-copypasta/ranked-copypasta.module.scss'
import { CopypastaEntry } from '~/types/copypasta'

const RankedCopypasta: Component<RankedCopypastaProps> = ({ entry, onDrop }) => {
  const formattedText = () => {
    const wordsArray = entry.text.split(' ')
    const emphasis = wordsArray.slice(0, 7).join(' ')
    const restOfMessage = wordsArray.slice(7).join(' ')
    return `<strong>${emphasis}</strong> ${restOfMessage}`
  }

  const [isDraggedOver, setIsDraggedOver] = createSignal(false)
  const cssClasses = () => ({
    [styles.copypasta]: true,
    [styles.isDraggedOver]: isDraggedOver()
  })
  const onDragEnter = (event: DragEvent) => {
    event.preventDefault()
  }
  const onDragOver = (event: DragEvent) => {
    event.preventDefault()
    setIsDraggedOver(true)
  }
  const onDragLeave = (event: DragEvent) => {
    event.preventDefault()
    setIsDraggedOver(false)
  }
  const onDropHandler = (event: DragEvent) => {
    const copypastaPayload = event.dataTransfer?.getData('pasta')
    if (copypastaPayload) {
      const copypasta: CopypastaEntry = JSON.parse(copypastaPayload)
      onDrop(copypasta)
    } else {
      throw new Error('Invalid dataTransfer value on RankedCopypasta onDropHandler')
    }
  }
  
  return (
    <div
      classList={cssClasses()}
      innerHTML={formattedText()}
      draggable={true}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDropHandler}
    />
  )
}

export default RankedCopypasta
