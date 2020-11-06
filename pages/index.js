import Layout from "./com/layout";

function IndexPage(){
  return(
  <Layout>
    <div>
      <h1></h1>
      <style jsx global>
        {`
          h1 {
            color: red;
            font-weight: 900;
            font-family: serif;
            font-size: 80px;
          }
          body {
            background: #a1e8ff;
            text-align: center;
          }
        `}
      </style>
    </div>
  </Layout>
);
  }

export default IndexPage;
