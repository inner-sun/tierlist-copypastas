import { Component, For, createSignal } from 'solid-js'
import styles from '~/components/backlog/backlog.module.scss'
import Copypasta from '~/components/copypasta/copypasta'
import { getCopypastaList } from '~/services/copypasta-list'

const Backlog: Component = () => {
  const [copypastas, setCopypastas] = createSignal(getCopypastaList())
  const removeEntry = (id: number) => () => {
    setCopypastas(list => list.filter(entry => entry.id !== id))
  }
  
  return (
    <div class={styles.backlog}>
      <For each={copypastas()}>
        {entry => (
          <Copypasta
            entry={entry}
            removeSelf={removeEntry(entry.id)}
          />
        )}
      </For>
    </div>
  )
}

export default Backlog
