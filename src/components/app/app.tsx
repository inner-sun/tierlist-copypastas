import { Component } from 'solid-js'
import styles from '~/components/app/app.module.scss'
import Backlog from '~/components/backlog/backlog'
import Header from '~/components/header/header'

const App: Component = () => {
  return (
    <div class={styles.app}>
      <Header />
      <div class={styles.workzone}>
        <Backlog />
        <div>dropzone</div>
      </div>
    </div>
  )
}

export default App
