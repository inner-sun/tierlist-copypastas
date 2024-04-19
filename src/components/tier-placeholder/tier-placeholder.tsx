import { Component, createSignal } from 'solid-js'
import { TierPlaceholderProps } from '~/components/tier-placeholder/tier-placeholder.interfaces'
import styles from '~/components/tier-placeholder/tier-placeholder.module.scss'
import { CopypastaEntry } from '~/types/copypasta'

const TierPlaceholder: Component<TierPlaceholderProps> = ({ onDrop, origin }) => {
  const [isDraggedOver, setIsDraggedOver] = createSignal(false)
  const cssClasses = () => ({
    [styles.placeholder]: true,
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
    const payload = event.dataTransfer?.getData('pasta')
    const pastaOrigin = event.dataTransfer?.getData('pasta/origin')
    if (payload && pastaOrigin) {
      const copypasta: CopypastaEntry = JSON.parse(payload)
      onDrop(copypasta, pastaOrigin)
    } else {
      throw new Error('Invalid dataTransfer value on TierPlaceholder onDropHandler')
    }
  }
  return (
    <div
      classList={cssClasses()}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDropHandler}
    />
  )
}

export default TierPlaceholder
