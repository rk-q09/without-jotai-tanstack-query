import { PeopleDetail } from "@/features/People/PeopleDetail/PeopleDetail";
import { PeopleDetailWithAtom } from "@/features/People/PeopleDetailWithAtom/PeopleDetailWithAtom";

type Props = {
  params: { peopleId: string };
};

export default function PeoplePage(props: Props) {
  const { params } = props;
  const peopleId = Number(params.peopleId);

  return (
    <div>
      <PeopleDetail peopleId={peopleId} />
      <PeopleDetailWithAtom />
    </div>
  );
}
