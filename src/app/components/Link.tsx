export interface LinkProps {
  title: string;
  href: string;
}

export default function Link(props: LinkProps) {
  return (
    <a className="hover:text-gray-900 underline" href={props.href}>
      {props.title}
    </a>
  );
}
