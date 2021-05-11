import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from "next/link";
import styles from "../styles/components/Layout.module.css";
import { FiSearch, FiUser } from "react-icons/fi";
import Logo from "../components/Logo"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <Logo width={120} />
          </a>
        </Link>
        <div className={styles.searchBarWrapper}>
          <FiSearch className={styles.searchIcon} />
          <input className={styles.searchBar} type="text" placeholder="Pesquisar Empresas" />
        </div>
        <div className={styles.avatarWrapper}>
          <span className={styles.avatar}>
            <FiUser className={styles.avatarIcon} />
          </span>
          <Link href="/logout">
            <a>Sair</a>
          </Link>
        </div>
      </nav>
    </header>
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  </div>
)

export default Layout
