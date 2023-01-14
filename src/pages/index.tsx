import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

import { HomePage } from "layout/Home";

const Home: NextPage = () => {
  return <HomePage />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["riderize.pokedex.email"]: email } = parseCookies(ctx);

  if (email) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
