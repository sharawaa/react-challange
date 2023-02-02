import { useParams } from "react-router-dom";

export default function Page() {
  const pageNumber = useParams();
  return <div> page {pageNumber.id}</div>;
}
