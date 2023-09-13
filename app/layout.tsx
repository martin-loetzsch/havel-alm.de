import { ReactNode } from 'react'
import '../components/global-styles/main.scss'
import styles from './layout.module.scss'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  )
}
