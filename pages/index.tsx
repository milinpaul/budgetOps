import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-brand-primary">
        BudgetOps
      </h1>
      <h3 className="text-brand-accent">Accent Color</h3>
    </>
  );
};

export default Home;
