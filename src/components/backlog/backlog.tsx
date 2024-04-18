import { Component, For, createResource } from 'solid-js'
import styles from '~/components/backlog/backlog.module.scss'
import Copypasta from '~/components/copypasta/copypasta'
import { getCopypastaList } from '~/services/copypasta-list'

const Backlog: Component = () => {
  const [copypastas] = createResource(getCopypastaList)
  
  return (
    <div class={styles.backlog}>
      <For each={copypastas()}>
        {(entry) => <Copypasta entry={entry} />}
      </For>
    </div>
  )
}

export default Backlog
