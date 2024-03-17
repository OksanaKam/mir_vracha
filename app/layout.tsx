import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MirVracha',
  description: 'Профессиональный портал МирВрача, на котором есть всё необходимое врачу: научные статьи, медицинские новости, калькуляторы и клинические случаи. А также большой форум врачей',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
