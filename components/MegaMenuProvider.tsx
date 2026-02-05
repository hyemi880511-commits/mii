"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type MegaMenuCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
};

const Ctx = createContext<MegaMenuCtx | null>(null);

export function useMegaMenu() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useMegaMenu must be used within MegaMenuProvider");
  return v;
}

export default function MegaMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({ open, setOpen, toggle: () => setOpen((p) => !p) }),
    [open]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
