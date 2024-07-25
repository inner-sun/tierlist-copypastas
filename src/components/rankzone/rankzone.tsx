import { Component } from 'solid-js'
import styles from '~/components/rankzone/rankzone.module.scss'
import Tier from '~/components/tier/tier'

const Rankzone: Component = () => {
  return (
    <div class={styles.rankzone}>
      <Tier label={'S'} color={'#f59e03'} />
      <Tier label={'A'} color={'#2ea146'} />
      <Tier label={'B'} color={'#20a9a8'} />
      <Tier label={'C'} color={'#654c37'} />
      <Tier label={'D'} color={'#4a4f55'} />
    </div>
  )
}

export default Rankzone
