import {PropsWithChildren} from "react";
import styled from "styled-components";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Container = styled.div`
  padding: 0 2rem;
`;

const Body = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Container>
      <Head>
        <title>Budget UI</title>
        <meta name="landing page" content="Work In Progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
}
