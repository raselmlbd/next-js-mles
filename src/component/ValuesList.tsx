import { ValuesQuery } from "@/datalayer/Types/AllTypes";

type ValuesListProps = {
  eachValueList: ValuesQuery;
};

export default function ValuesList({
  eachValueList: { title, description },
}: ValuesListProps): JSX.Element {
  return (
    <div className="values-card wow animate__animated">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
