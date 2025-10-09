import styles from './Avatar.module.css'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add props here
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.avatar, className].filter(Boolean).join(' ')

  return (
    <div className={combinedClassName} {...rest}>
      {/* Component implementation */}
    </div>
  )
}
