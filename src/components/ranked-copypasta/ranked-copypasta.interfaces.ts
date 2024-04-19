import { CopypastaEntry } from '~/types/copypasta'

export interface RankedCopypastaProps {
  entry: CopypastaEntry
  onDrop: (copypasta: CopypastaEntry) => void
  removeSelf: () => void
}
