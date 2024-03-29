import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import {Analytics} from "@vercel/analytics/react";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1492608901815364"
     crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
