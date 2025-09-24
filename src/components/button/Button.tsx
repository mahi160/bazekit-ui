import styles from "./Button.module.css";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "secondary" | "outlined";
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    className,
    size = "medium",
    variant = "default",
    ...rest
  } = props;
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      className={classes}
      data-size={size}
      data-variant={variant}
      {...rest}
    >
      {children}
    </button>
  );
};
