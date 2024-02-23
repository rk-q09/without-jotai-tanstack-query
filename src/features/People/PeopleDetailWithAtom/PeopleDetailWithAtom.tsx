"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { usePeopleId, usePeoplesDetail } from "./hooks";
import styles from "./PeopleDetailWithAtom.module.scss";

export function Main() {
  const peopleId = usePeopleId();

  const { data } = usePeoplesDetail();

  return (
    <div className={styles.container}>
      <h2>People Detail With Atom</h2>
      <h3>SWAPI: /people/{peopleId}</h3>
      <p>name: {data.name}</p>
      <p>height: {data.height}</p>
      <p>mass: {data.mass}</p>
    </div>
  );
}

export function PeopleDetailWithAtom() {
  return (
    <ErrorBoundary fallback={<div>error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
}
