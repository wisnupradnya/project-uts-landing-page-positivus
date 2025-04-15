// atoms/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-lime-400 text-black px-4 rounded-md font-semibold hover:bg-lime-300 transition"
    >
      {children}
    </button>
  );
}
