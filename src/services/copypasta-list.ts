import pastas from '~/assets/list.txt?raw'
import { CopypastaEntry } from '~/types/copypasta'

const getCopypastaList = (): CopypastaEntry[] => {
  return pastas.split('\n').map((entry, index) => ({
    id: index,
    text: entry
  }))
}

export { getCopypastaList }