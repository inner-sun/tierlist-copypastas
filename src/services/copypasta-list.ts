import pastas from '~/assets/list.txt?raw'
import { Copypasta } from '~/types/copypasta'

const getCopypastaList = (): Copypasta[] => {
  return pastas.split('\n')
}

export { getCopypastaList }