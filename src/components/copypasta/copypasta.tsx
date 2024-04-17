import { Component } from 'solid-js'
import { CopypastaProps } from '~/components/copypasta/copypasta.interfaces'
import styles from '~/components/copypasta/copypasta.module.scss'

const Copypasta: Component<CopypastaProps> = (props) => {
  return (
    <div class={styles.container}>
      Content
    </div>
  )
}

export default Copypasta
