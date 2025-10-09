import styles from './Checkbox.module.css'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { className, label, id, ...rest } = props
  const combinedClassName = [styles.checkbox, className].filter(Boolean).join(' ')
  const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        className={combinedClassName}
        id={checkboxId}
        {...rest}
      />
      {label && (
        <label htmlFor={checkboxId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  )
}
