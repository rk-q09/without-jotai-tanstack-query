import { atom, useAtomValue, useSetAtom } from "jotai";
import { useSuspenseQuery } from "@tanstack/react-query";

const peopleIdAtom = atom(1);

export const usePeopleId = () => useAtomValue(peopleIdAtom);
export const useSetPeoleId = () => useSetAtom(peopleIdAtom);

export const usePeoplesDetail = () => {
  const peopleId = usePeopleId();
  return useSuspenseQuery({
    queryKey: ["people", peopleId],
    queryFn: () =>
      fetch(`https://swapi.dev/api/people/${peopleId}`).then((res) =>
        res.json(),
      ),
  });
};

/*
export const [peopleDetailAtom] = atomWithSuspenseQuery((get) => {
  const peopleId = get(peopleIdAtom)
  return {
    queryKey: ["people", peopleId],
    queryFn: () => 
      fetch(`https://swapi.dev/api/people/${peopleId}`).then((res) =>
        res.json(),
      ),
})
  }
*/
