import "./styles.scss";
import { useAppDispatch } from "../../store/hook";
import { changeViewMode } from "../../store/slice/moiveSlice";

export default function SwitchButton() {
  const dispatch = useAppDispatch();
  return (
    <div className="switch-wrapper">
      <span className="label">List view</span>
      <label className="switch">
        <input type="checkbox" onChange={() => dispatch(changeViewMode())} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
