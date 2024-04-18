import { Component } from 'solid-js'
import { TierProps } from '~/components/tier/tier.interfaces'
import styles from '~/components/tier/tier.module.scss'

const Tier: Component<TierProps> = ({ color, label }) => {
  return (
    <div class={styles.tier}>
      <div class={styles.label} style={{ '--color': color }}>
        {label}
      </div>
      <div class={styles.entries}>
        <div>entry</div>
        <div>entry</div>
        <div>entry</div>
        <div>entry</div>
        <div>entry</div>
      </div>
    </div>
  )
}

export default Tier
