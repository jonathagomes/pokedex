import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

import { DashboardPage } from "layout/Dashboard";

const Dashboard: NextPage = () => {
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

export default Dashboard;
