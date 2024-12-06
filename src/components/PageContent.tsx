import { ReactNode } from 'react'

interface PageContentProps {
  children: ReactNode
}

export default function PageContent({ children }: PageContentProps) {
  return <div className="md:mx-28 mx-8 mt-40 text-black">{children}</div>
}
