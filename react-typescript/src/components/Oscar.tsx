import { type ReactNode } from "react";

type OscarPropTypes = {
  children: ReactNode;
};

const Oscar = ({ children }: OscarPropTypes) => {
  return <div>{children}</div>;
};

export default Oscar;
