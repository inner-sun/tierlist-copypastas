import pastas from '~/assets/list.csv'
import { CopypastaEntry } from '~/types/copypasta'

const getCopypastaList = (): CopypastaEntry[] => {
  return pastas.map((entry, index) => ({
    id: index,
    text: entry.pasta
  }))
}

export { getCopypastaList }