import '../components/global-styles/main.scss'
import styles from './layout.module.scss'
import { ReactNode } from 'react'
import Nav from '../components/nav/nav'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      {/*
    <head /> will contain the components returned by the nearest parent
    head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
  */}
      <head />
      <body>
        <div className={styles.container}>
          {children}
          <Nav/>
        </div>
      </body>
    </html>
  )
}
