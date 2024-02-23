import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const usePeoplesDetail = (peopleId: number) => {
  return useSuspenseQuery({
    queryKey: ["people", peopleId],
    queryFn: () =>
      fetch(`https://swapi.dev/api/people/${peopleId}`).then((res) =>
        res.json(),
      ),
  });
};
