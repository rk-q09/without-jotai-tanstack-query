"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { usePeoplesDetail } from "./hooks";
import styles from "./PeopleDetail.module.scss";

type Props = {
  peopleId: number;
};

export function Main(props: Props) {
  const { peopleId } = props;

  const { data } = usePeoplesDetail(peopleId);

  return (
    <div className={styles.container}>
      <h2>People Detail</h2>
      <h3>SWAPI: /people/{peopleId}</h3>
      <p>name: {data.name}</p>
      <p>height: {data.height}</p>
      <p>mass: {data.mass}</p>
    </div>
  );
}

export function PeopleDetail(props: Props) {
  return (
    <ErrorBoundary fallback={<div>error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Main {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}
