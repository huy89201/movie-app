import "./styles.scss";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  click?: any;
}

export default function Button({ children, click }: Props) {
  return (
    <button className="button" onClick={() => click()}>
      {children}
    </button>
  );
}
