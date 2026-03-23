import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return <main className="bg-black text-white">{children}</main>;
}
