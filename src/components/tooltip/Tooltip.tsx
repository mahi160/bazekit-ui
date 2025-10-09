import styles from './Tooltip.module.css'

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add props here
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.tooltip, className].filter(Boolean).join(' ')

  return (
    <div className={combinedClassName} {...rest}>
      {/* Component implementation */}
    </div>
  )
}
