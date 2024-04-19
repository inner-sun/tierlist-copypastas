import { Component, For, JSX, createSignal } from 'solid-js'
import Copypasta from '~/components/copypasta/copypasta'
import RankedCopypasta from '~/components/ranked-copypasta/ranked-copypasta'
import TierPlaceholder from '~/components/tier-placeholder/tier-placeholder'
import { TierProps } from '~/components/tier/tier.interfaces'
import styles from '~/components/tier/tier.module.scss'
import { CopypastaEntry } from '~/types/copypasta'

const Tier: Component<TierProps> = ({ color, label }) => {
  const [entries, setEntries] = createSignal<CopypastaEntry[]>([])
  const appendEntry = (index: number) => (copypasta: CopypastaEntry) => {
    setEntries(list => list.toSpliced(index, 0, copypasta))
  }

  const entriesPerRow = 5
  const renderPlaceholders = () => {
    const entriesCount = entries().length
    const placeholdersToDisplay = entriesCount !== 0 ? entriesPerRow - (entriesCount % entriesPerRow) : entriesPerRow
    const components: JSX.Element = []
    for(let i = 0; i<placeholdersToDisplay; i++){
      components.push(
        <TierPlaceholder onDrop={appendEntry(entriesCount)} />
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
        <For each={entries()}>
          {(entry, index) => (
            <RankedCopypasta
              entry={entry}
              onDrop={appendEntry(index())}
            />
          )}
        </For>
        {renderPlaceholders()}
      </div>
    </div>
  )
}

export default Tier
