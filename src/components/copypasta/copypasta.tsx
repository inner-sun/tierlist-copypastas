import { Component, createSignal } from 'solid-js'
import { CopypastaProps } from '~/components/copypasta/copypasta.interfaces'
import styles from '~/components/copypasta/copypasta.module.scss'
import { CopypastaEntry } from '~/types/copypasta'

const Copypasta: Component<CopypastaProps> = ({ entry, onDrop, onDelete, appearance, origin }) => {
  const formattedText = () => {
    const wordsArray = entry.text.split(' ')
    const emphasis = wordsArray.slice(0, 7).join(' ')
    const restOfMessage = wordsArray.slice(7).join(' ')
    return `<strong>${emphasis}</strong> ${restOfMessage}`
  }

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer?.setData('pasta', JSON.stringify(entry))
    event.dataTransfer?.setData('pasta/origin', origin)
  }
  const onDragEnd = (event: DragEvent) => {
    const dropSuccessful = event.dataTransfer?.dropEffect !== 'none'
    if (dropSuccessful){
      onDelete(origin)
    }
  }

  const [isDraggedOver, setIsDraggedOver] = createSignal(false)
  const cssClasses = () => ({
    [styles.copypasta]: appearance === 'copypasta',
    [styles.rankedCopypasta]: appearance === 'rankedCopypasta',
    [styles.isDraggedOver]: isDraggedOver()
  })
  const onDragEnter = (event: DragEvent) => {
    event.preventDefault()
  }
  const onDragOver = (event: DragEvent) => {
    event.preventDefault()
    const pastaOrigin = event.dataTransfer?.getData('pasta/origin')
    if (pastaOrigin === origin && event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move'
    }
    setIsDraggedOver(true)
  }
  const onDragLeave = (event: DragEvent) => {
    event.preventDefault()
    setIsDraggedOver(false)
  }
  const onDropHandler = (event: DragEvent) => {
    const payload = event.dataTransfer?.getData('pasta')
    const pastaOrigin = event.dataTransfer?.getData('pasta/origin')
    if (payload && pastaOrigin) {
      const copypasta: CopypastaEntry = JSON.parse(payload)
      onDrop(copypasta, pastaOrigin)
    } else {
      throw new Error('Invalid dataTransfer value on Copypasta onDropHandler')
    }
  }

  return (
    <div
      draggable={true}
      classList={cssClasses()}
      innerHTML={formattedText()}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDropHandler}
    />
  )
}

export default Copypasta
