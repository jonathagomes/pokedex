import { parseCookies } from "nookies";
import { DashboardPage } from "layout/Dashboard";
import type { GetServerSideProps, NextPage } from "next";

const Details: NextPage = () => {
  return <DashboardPage />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["riderize.pokedex.email"]: email } = parseCookies(ctx);

  if (!email) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Details;
