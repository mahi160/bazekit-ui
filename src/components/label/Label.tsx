import styles from './Label.module.css'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  // Add props here
}

export const Label: React.FC<LabelProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.label, className].filter(Boolean).join(' ')

  return (
    <label className={combinedClassName} {...rest}>
      {/* Component implementation */}
    </label>
  )
}
