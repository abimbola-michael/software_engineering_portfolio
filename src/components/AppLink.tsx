export default function AppLink({
  href,
  children,
  active,
  setActive,
}: {
  href: string;
  children: string;
  active: string;
  setActive: (active: string) => void;
}) {
  //   function isActive() {
  //     const { hash } = window.location;
  //     return hash === href;
  //   }
  return (
    <a
      href={href}
      className={`hover:text-primary hover:underline decoration-primary ${
        active === href ? "text-primary" : ""
      }`}
      onClick={() => setActive(href)}
    >
      {children}
    </a>
  );
}
