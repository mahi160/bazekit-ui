import { Input as BaseInput } from '@base-ui-components/react/input'
import styles from './Input.module.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.input, className].filter(Boolean).join(' ')
  return <BaseInput className={combinedClassName} {...rest} />
}
