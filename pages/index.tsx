import type { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/layout";

const TextAlignment = `text-align: center;`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  ${TextAlignment}
  a {
    color: #0070f3;
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  ${TextAlignment}
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Title>Welcome to Budget UI</Title>

      <Description>
        This application was created using{" "}
        <a href="https://nextjs.org/docs">Next Js</a>
        <br />
        This is a placeholder for now, while the business logic is configured.
      </Description>

      <Grid>
        <Card href="https://github.com/ryanjwise/budget">
          <h2>Github Repository &rarr;</h2>
          <p>See the repository source for this page.</p>
        </Card>

        <Card href="https://nextjs.org/learn">
          <h2>Learn Next &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Card>
      </Grid>
    </Layout>
  );
};

export default Home;
