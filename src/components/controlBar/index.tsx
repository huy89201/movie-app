import "./styles.scss";
import SwitchButton from "../switchButton";
import Button from "../button";
import { useAppDispatch } from "../../store/hook";
import { changeMovieListType } from "../../store/slice/moiveSlice";
import { MOVIE_LIST } from "../../util/constant";

export default function ControlBar() {
  const dispatch = useAppDispatch();

  return (
    <div className="control-bar">
      <div className="left-btn-gr">
        <Button
          click={() => dispatch(changeMovieListType(MOVIE_LIST.NOW_PLAYING))}
        >
          Now playing
        </Button>
        <Button
          click={() => dispatch(changeMovieListType(MOVIE_LIST.TOP_RATED))}
        >
          Top rated
        </Button>
      </div>
      <>
        <SwitchButton />
      </>
    </div>
  );
}
