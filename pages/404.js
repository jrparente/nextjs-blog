import Head from "next/head";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>You got yourself lost, have you?</title>
      </Head>
      <h1>Oops! Wrong page 😶‍🌫️</h1>
    </Layout>
  );
}
