import { Component, createSignal } from 'solid-js'
import { TierPlaceholderProps } from '~/components/tier-placeholder/tier-placeholder.interfaces'
import styles from '~/components/tier-placeholder/tier-placeholder.module.scss'

const TierPlaceholder: Component<TierPlaceholderProps> = ({ onDrop }) => {
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
    const copypasta = event.dataTransfer?.getData('pasta')
    if (copypasta) {
      onDrop(copypasta)
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
