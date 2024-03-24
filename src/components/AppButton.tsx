export default function AppButton({
  text,
  href,
  onClick,
}: {
  text: string;
  href?: string;
  onClick?: () => void;
}) {
  if (href !== undefined) {
    return (
      <a
        href={href}
        target="_blank"
        className="px-12 py-2 rounded-full text-white bg-primary"
        onClick={onClick}
      >
        {text}
      </a>
    );
  }
  return (
    <button
      className="px-12 py-3 rounded-full text-white bg-primary"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
