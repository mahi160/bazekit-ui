import styles from './Progress.module.css'

export interface ProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  // Add props here
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.progress, className].filter(Boolean).join(' ')

  return (
    <progress className={combinedClassName} {...rest}>
      {/* Component implementation */}
    </progress>
  )
}
