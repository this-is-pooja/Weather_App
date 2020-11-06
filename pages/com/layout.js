import Head from 'next/head';
import Navbar from '../com/navbar';
const Layout=(props)=>(
  <div>
    <Head>
      <title >Weather_App</title>
      <meta name="viewport" content="width=device-width,
       initial-scale=1" />
      <meta charSet="utf-8" />
      </Head>
      <div>
  <Navbar />
  {props.children}
  </div>
  
  </div>
)

export default Layout;