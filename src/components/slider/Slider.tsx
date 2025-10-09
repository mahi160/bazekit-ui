import styles from './Slider.module.css'

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Add props here
}

export const Slider: React.FC<SliderProps> = (props) => {
  const { className, ...rest } = props
  const combinedClassName = [styles.slider, className].filter(Boolean).join(' ')

  return (
    <input type="range" className={combinedClassName} {...rest} />
  )
}
