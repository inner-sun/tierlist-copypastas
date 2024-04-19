import { CopypastaEntry } from '~/types/copypasta'

export interface CopypastaProps {
  entry: CopypastaEntry
  onDrop: (copypasta: CopypastaEntry, origin: string) => void
  onDelete: (origin: string) => void
  appearance: 'copypasta' | 'rankedCopypasta'
  origin: string
}
