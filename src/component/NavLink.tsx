import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavlinkCombatProps extends Omit<NavLinkProps, "className">{
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavlinkCombatProps>(({
    className,
    activeClassName,
    pendingClassName,
    ...props
}, ref) => {
    return (
        <RouterNavLink
            ref={ref}
            className={({ isActive, isPending }) => cn(
                className,
                isActive && activeClassName,
                isPending && pendingClassName
            )}
            {...props}
        />
    );  
});

NavLink.displayName = "NavLink";
