import React, { ReactNode } from "react";

export type ChildrenOnlyPorps = {
    children: ReactNode
}

export function createContextFromArrow<ContextType>(arrow: (() => ContextType)) {
    const ctx = React.createContext<
    ContextType | undefined
    >(undefined);
    function useContext() {
        const c = React.useContext(ctx);
        if (c === undefined)
            throw new Error(
                "useContext must be inside a Provider with a value."
            );
        return c;
    }

    const Provider = ({ children }: ChildrenOnlyPorps) => {
        return (
            <ctx.Provider value={arrow()}>
                {children}
            </ctx.Provider>
        );
    };

    return [useContext, Provider] as const;
}