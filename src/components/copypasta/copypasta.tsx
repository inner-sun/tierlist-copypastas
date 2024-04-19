import { Component } from 'solid-js'
import { CopypastaProps } from '~/components/copypasta/copypasta.interfaces'
import styles from '~/components/copypasta/copypasta.module.scss'

const Copypasta: Component<CopypastaProps> = ({ entry }) => {
  const formattedText = () => {
    const wordsArray = entry.split(' ')
    const emphasis = wordsArray.slice(0, 7).join(' ')
    const restOfMessage = wordsArray.slice(7).join(' ')
    return `<strong>${emphasis}</strong> ${restOfMessage}`
  }

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer?.setData('pasta', entry)
  }

  return (
    <div
      draggable={true}
      class={styles.copypasta}
      innerHTML={formattedText()}
      onDragStart={onDragStart}
    />
  )
}

export default Copypasta
