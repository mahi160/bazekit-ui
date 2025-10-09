import styles from './Toggle.module.css'

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = (props) => {
  const {
    className,
    children,
    pressed,
    defaultPressed,
    onPressedChange,
    ...rest
  } = props

  const combinedClassName = [styles.toggle, className].filter(Boolean).join(' ')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e)
    if (!e.defaultPrevented && onPressedChange) {
      onPressedChange(!pressed)
    }
  }

  return (
    <button
      className={combinedClassName}
      data-state={pressed ? 'on' : 'off'}
      aria-pressed={pressed}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
