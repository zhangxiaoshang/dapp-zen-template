import styles from './BaseTemplate.module.scss'

export interface IBaseTemplate {
  simpleTextProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ simpleTextProp }) => {
  return <div className={styles.BaseTemplate}>{simpleTextProp}</div>
}

export default BaseTemplate
