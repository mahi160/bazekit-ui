import styles from './Textarea.module.css'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.textarea, className].filter(Boolean).join(' ')
  return <textarea className={combinedClassName} {...rest} />
}