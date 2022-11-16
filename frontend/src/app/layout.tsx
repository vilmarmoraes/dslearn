import Link from 'next/link';
import Menu from '../components/Menu';
import styles from '../styles/layout.module.css';

interface LayoutProps{
  children: any
}

export default function Layout(props: LayoutProps) {
    return (
      <html lang="pt">
        <head>
          <title>Next.js</title>
        </head>
        <body>
          <div className={styles.header}>
            <Menu/>
{/*             <div>
            <Link href="/second">navigate to second</Link>;
            </div> */}
          </div>
          <div>
          {props.children}
          </div>
        </body>
      </html>)
  }