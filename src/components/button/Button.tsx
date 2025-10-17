import styles from './Button.module.css'

/**
 * Props for the Button component.
 * @interface IButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>}
 */
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   * @default 'default'
   */
  size?: 'sm' | 'md' | 'lg' | 'icon'

  /**
   * The visual style variant of the button
   * @default 'default'
   */
  variant?: 'default' | 'secondary' | 'alert' | 'outline' | 'ghost' | 'link'
}

/**
 * Button component for user interactions.
 *
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click Me
 * </Button>
 * ```
 *
 * @param {IButtonProps} props - The props for the Button component
 * @returns {React.ReactElement} A styled button element
 */
export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    className,
    size = 'default',
    variant = 'default',
    type = 'button',
    ...rest
  } = props
  const classes = [styles.button, className].filter(Boolean).join(' ')

  return (
    <button
      className={classes}
      data-size={size}
      data-variant={variant}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
