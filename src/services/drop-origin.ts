import { createSignal } from 'solid-js'

const [dropOrigin, setDropOrigin] = createSignal<string>()

export { dropOrigin, setDropOrigin }