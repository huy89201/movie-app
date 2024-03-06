import "./styles.scss";
import Button from "../button";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { nextPage, previousPage } from "../../store/slice/moiveSlice";

export default function Pagination() {
  const page = useAppSelector((state) => state.movies.page);
  const dispatch = useAppDispatch();

  return (
    <div className="pagination">
      <Button click={() => dispatch(previousPage())}>Previous</Button>
      <div>{page}</div>
      <Button click={() => dispatch(nextPage())}>Next</Button>
    </div>
  );
}
