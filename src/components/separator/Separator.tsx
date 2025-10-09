import styles from './Separator.module.css'

export interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  // Add props here
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.separator, className].filter(Boolean).join(' ')

  return (
    <hr className={combinedClassName} {...rest} />
  )
}
