// molecules/NavigationLinks.tsx

import TextLink from "../Attom/TextLink";

export default function NavigationLinks() {
  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm">
      {links.map((text, i) => (
        <TextLink href="#" key={i}>
          {text}
        </TextLink>
      ))}
    </div>
  );
}
