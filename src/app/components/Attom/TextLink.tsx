interface TextLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function TextLink({ href, children }: TextLinkProps) {
  return (
    <a href={href} className="hover:underline">
      {children}
    </a>
  );
}
