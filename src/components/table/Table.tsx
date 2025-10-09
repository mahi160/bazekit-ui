import styles from './Table.module.css'

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  // Add props here
}

export const Table: React.FC<TableProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.table, className].filter(Boolean).join(' ')

  return (
    <table className={combinedClassName} {...rest}>
      {/* Component implementation */}
    </table>
  )
}
