import pastas from '~/assets/list.txt?raw'
import { CopypastaEntry } from '~/types/copypasta'

const getCopypastaList = (): CopypastaEntry[] => {
  return pastas.split('\n')
}

export { getCopypastaList }