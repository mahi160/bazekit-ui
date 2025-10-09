import styles from './Select.module.css'

export interface SelectProps 
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<{
    value: string
    label: string
    disabled?: boolean
  }>
}

export const Select: React.FC<SelectProps> = (props) => {
  const { className, children, options, ...rest } = props
  const combinedClassName = [styles.select, className].filter(Boolean).join(' ')

  return (
    <select className={combinedClassName} {...rest}>
      {options ? (
        options.map(option => (
          <option 
            key={option.value} 
            value={option.value} 
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))
      ) : (
        children
      )}
    </select>
  )
}