import LABELS from "../constants/labels";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "mosswood" | "sand" | "primary" | "secondary" | "accent";
  className?: string;
}

export default function Button({
  className = "",
  children,
  color = "primary",
  ...props
}: ButtonProps) {
  const colorStyles: Record<string, string> = {
    primary: "bg-primary text-white hover:brightness-110",
    secondary: "bg-secondary text-white hover:brightness-110",
    accent: "bg-accent text-white hover:brightness-110",
    sand: "bg-sand text-black hover:brightness-110",
  };

  const base =
    "px-4 py-2 rounded-md font-semibold transition duration-300 shadow-xl";
  return (
    <button className={`${className} ${colorStyles[color]} ${base}`} {...props}>
      {children}
    </button>
  );
}
