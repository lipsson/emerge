import type { LinkProps } from "react-router-dom";

export interface RouterLinkProps extends Omit<LinkProps, "to"> {
  href: string;
}
