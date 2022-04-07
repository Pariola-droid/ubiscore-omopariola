import React, { useState } from "react";
import Head from 'next/head';

import Signup from "../components/onboarding/Signup";
import Success from "../components/onboarding/Success";


export default function Home() {

  const [uiState, setUiState] = useState("Signup");

  return (
    <div>
      <Head>
        <title>Ubiscore - Challenge </title>
        <meta name="Ubiscore" content="Get an instant AI-driven answer for your company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {uiState === "Signup" &&
        <Signup setUiState={setUiState}/>
      }

      {uiState === "Success" &&
        <Success setUiState={setUiState} />
      }
    </div>
  )
}

