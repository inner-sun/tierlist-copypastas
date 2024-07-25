import { CopypastaEntry } from '~/types/copypasta'

export interface TierPlaceholderProps {
  onDrop: (copypasta: CopypastaEntry, origin: string) => void
  origin: string
}
