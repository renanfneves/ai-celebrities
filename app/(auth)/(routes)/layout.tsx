import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function layout({ children }: LayoutProps) {
  return (
    <div className="flex items-center justify-center h-full">
      {children}
    </div>
  )
}
