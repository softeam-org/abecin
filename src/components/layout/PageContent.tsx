import { ReactNode } from 'react'

interface PageContentProps {
	children: ReactNode
}

export default function PageContent({ children }: PageContentProps) {
	return (
		<div className="md:mx-20 lg:mx-auto max-w-4xl mx-8 mt-44 mb-32 text-black">
			{children}
		</div>
	)
}
