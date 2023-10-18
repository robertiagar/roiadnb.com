import { ReactNode } from "react";

export interface LinkProps {
  title: string;
  href: string;
  content: ReactNode;
}

export default function Link(props: LinkProps) {
  return (
    <a className="hover:text-gray-900 underline" href={props.href}>
      <div className="flex flex-row gap-x-1">
        {props.content}
        {props.title}
      </div>
    </a>
  );
}
