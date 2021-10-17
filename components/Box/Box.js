import styles from './Box.module.scss'

const Box = ({ children, id }) => {
  return (
    <div className={styles.box} id={id}>
      {children}
    </div>
  )
}

export default Box