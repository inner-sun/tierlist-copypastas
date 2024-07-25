import { Component } from 'solid-js'
import styles from '~/components/header/header.module.scss'

const Header: Component = () => {
  return (
    <div class={styles.header}>
      <h1>Copypasta <strong>Tierlist</strong></h1>
      {/* <h2>Les MochiGang</h2> */}
    </div>
  )
}

export default Header
