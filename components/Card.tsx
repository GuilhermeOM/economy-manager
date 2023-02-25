interface CardProps {
  children: JSX.Element | JSX.Element[];
  tailwindcss?: string;
}

export const Card = ({ children, tailwindcss }: CardProps) => {
  return (
    <div
      className={`bg-neutral-800 p-4 rounded-lg border border-neutral-700 hover:bg-neutral-850 cursor-pointer transition duration-2 ${tailwindcss}`}
    >
      {children}
    </div>
  );
};
