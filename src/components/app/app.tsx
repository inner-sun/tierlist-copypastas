import { Component } from 'solid-js'
import styles from '~/components/app/app.module.scss'
import Header from '~/components/header/header'

const App: Component = () => {
  return (
    <div class={styles.app}>
      <Header />
      <div>Content</div>
    </div>
  )
}

export default App
