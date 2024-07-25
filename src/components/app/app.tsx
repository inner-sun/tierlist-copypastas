import { Component } from 'solid-js'
import styles from '~/components/app/app.module.scss'
import Backlog from '~/components/backlog/backlog'
import Header from '~/components/header/header'
import Rankzone from '~/components/rankzone/rankzone'

const App: Component = () => {
  return (
    <div class={styles.app}>
      <Header />
      <div class={styles.workzone}>
        <Backlog />
        <Rankzone />
      </div>
    </div>
  )
}

export default App
