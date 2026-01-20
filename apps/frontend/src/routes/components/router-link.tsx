import type { RouterLinkProps } from "@/routes/components/types/routes-link.types.ts";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...other }, ref) => <Link ref={ref} to={href} {...other} />,
);
RouterLink.displayName = "RouterLink";
