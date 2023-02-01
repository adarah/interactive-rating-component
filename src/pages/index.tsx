import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import RatingCard from "../components/RatingCard";
import ThankYouCard from "../components/ThankYouCard";

const Home: NextPage = () => {
  const [score, setScore] = useState<string>();
  return (
    <>
      <Head>
        <title>Interactive rating component</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className="flex h-screen w-full items-center justify-center bg-verydarkblue">
        <section>
          {!score ? (
            <RatingCard setScore={(s) => setScore(s)} />
          ) : (
            <ThankYouCard score={score} />
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
