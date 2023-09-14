import React from "react";

interface Props {
  children?: React.ReactNode;
}

export function Container({ children }: Props) {
  return <div className="container px-4 mx-auto">{children}</div>;
}
