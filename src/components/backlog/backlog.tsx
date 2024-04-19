import { Component, For, createSignal } from 'solid-js'
import styles from '~/components/backlog/backlog.module.scss'
import Copypasta from '~/components/copypasta/copypasta'
import { getCopypastaList } from '~/services/copypasta-list'
import { dropOrigin, setDropOrigin } from '~/services/drop-origin'
import { CopypastaEntry } from '~/types/copypasta'

const Backlog: Component = () => {
  const [copypastas, setCopypastas] = createSignal(getCopypastaList())
  const onDropHandler = (index: number) => (copypasta: CopypastaEntry, origin: string) => {
    setDropOrigin('backlog')
    if(origin === 'backlog'){
      reorderEntry(index, copypasta)
    }else{
      appendEntry(index, copypasta)
    }
  }
  const appendEntry = (index: number, copypasta: CopypastaEntry) => {
    setCopypastas(list => list.toSpliced(index, 0, copypasta))
  }
  const reorderEntry = (newIndex: number, copypasta: CopypastaEntry) => {
    setCopypastas(list => {
      const newList: CopypastaEntry[] = []
      list.forEach((entry, index) => {
        if (index === newIndex) {
          newList.push(copypasta)
        }
        if (entry.id !== copypasta.id) {
          newList.push(entry)
        }
      })
      return newList
    })
  }
  const removeEntry = (id: number) => (origin: string) => {
    if (origin !== dropOrigin()){
      setCopypastas(list => list.filter(entry => entry.id !== id))
    }
  }
  
  return (
    <div class={styles.backlog}>
      <For each={copypastas()}>
        {entry => (
          <Copypasta
            appearance='copypasta'
            origin='backlog'
            entry={entry}
            onDrop={onDropHandler(entry.id)}
            onDelete={removeEntry(entry.id)}
          />
        )}
      </For>
    </div>
  )
}

export default Backlog
