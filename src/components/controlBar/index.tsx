import "./styles.scss";
import SwitchButton from "../switchButton";
import Button from "../button";

export default function ControlBar() {
  return (
    <div className="control-bar">
      <div className="left-btn-gr">
        <Button>Now playing</Button>
        <Button>Top rated</Button>
      </div>
      <>
        <SwitchButton />
      </>
    </div>
  );
}
