import Head from 'next/head';

const Layout = ({ children, title }) => {
  const t = `${title} - OXD Photography`
  return (

      <>
        {title && (
          <Head>
            <title>{t}</title>
          </Head>
        )}
        {children}
      </>

  )
}

export default Layout