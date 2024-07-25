import { Component, For, JSX, createSignal } from 'solid-js'
import Copypasta from '~/components/copypasta/copypasta'
import TierPlaceholder from '~/components/tier-placeholder/tier-placeholder'
import { TierProps } from '~/components/tier/tier.interfaces'
import styles from '~/components/tier/tier.module.scss'
import { dropOrigin, setDropOrigin } from '~/services/drop-origin'
import { CopypastaEntry } from '~/types/copypasta'

const Tier: Component<TierProps> = ({ color, label }) => {
  const [copypastas, setCopypastas] = createSignal<CopypastaEntry[]>([])
  const onDropHandler = (index: number) => (copypasta: CopypastaEntry, origin: string) => {
    setDropOrigin(label)
    if (origin === label) {
      reorderEntry(index, copypasta)
    } else {
      appendEntry(index, copypasta)
    }
  }
  const appendEntry = (index: number, copypasta: CopypastaEntry) => {
    setCopypastas(list => list.toSpliced(index, 0, copypasta))
  }
  const reorderEntry = (newIndex: number, copypasta: CopypastaEntry) => {
    setCopypastas(list => {
      const moveToTheEnd = newIndex+1 > list.length
      const newList: CopypastaEntry[] = []
      list.forEach((entry, index) => {
        if(index === newIndex){
          newList.push(copypasta)
        }
        if(entry.id !== copypasta.id){
          newList.push(entry)
        }
      })
      if(moveToTheEnd){
        newList.push(copypasta)
      }
      return newList
    })
  }
  const removeEntry = (id: number) => (origin: string) => {
    if (origin !== dropOrigin()) {
      setCopypastas(list => list.filter(entry => entry.id !== id))
    }
  }

  const entriesPerRow = 5
  const renderPlaceholders = () => {
    const entriesCount = copypastas().length
    const placeholdersToDisplay = entriesCount !== 0 ? entriesPerRow - (entriesCount % entriesPerRow) : entriesPerRow
    const components: JSX.Element = []
    for(let i = 0; i<placeholdersToDisplay; i++){
      components.push(
        <TierPlaceholder
          onDrop={onDropHandler(entriesCount)}
          origin={label}
        />
      )
    }
    return components
  }

  return (
    <div class={styles.tier}>
      <div class={styles.label} style={{ '--color': color }}>
        {label}
      </div>
      <div class={styles.entries}>
        <For each={copypastas()}>
          {(entry, index) => (
            <Copypasta
              appearance='rankedCopypasta'
              origin={label}
              entry={entry}
              onDrop={onDropHandler(index())}
              onDelete={removeEntry(entry.id)}
            />
          )}
        </For>
        {renderPlaceholders()}
      </div>
    </div>
  )
}

export default Tier
