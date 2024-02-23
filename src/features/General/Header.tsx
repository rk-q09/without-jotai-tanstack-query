"use client";
import { useSetPeoleId } from "../People/PeopleDetailWithAtom/hooks";
import styles from "./Header.module.scss";

export function Header() {
  const setPeopleId = useSetPeoleId();
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setPeopleId(5)}>
        set people id to 5
      </button>
    </div>
  );
}
