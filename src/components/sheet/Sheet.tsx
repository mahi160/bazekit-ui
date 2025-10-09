import styles from './Sheet.module.css'

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add props here
}

export const Sheet: React.FC<SheetProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.sheet, className].filter(Boolean).join(' ')

  return (
    <div className={combinedClassName} {...rest}>
      {/* Component implementation */}
    </div>
  )
}
