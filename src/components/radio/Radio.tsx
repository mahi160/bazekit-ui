import styles from './Radio.module.css'

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Radio: React.FC<RadioProps> = (props) => {
  const { className, label, id, ...rest } = props
  const combinedClassName = [styles.radio, className].filter(Boolean).join(' ')
  const radioId = id || `radio-${Math.random().toString(36).substring(2, 9)}`

  return (
    <div className={styles.container}>
      <input
        type="radio"
        className={combinedClassName}
        id={radioId}
        {...rest}
      />
      {label && (
        <label htmlFor={radioId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  )
}
