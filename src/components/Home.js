import Donations from "./Donations";

export const Home = (props) => {
  const showAlert = props.showAlert;
  return (
    <div>
      <Donations showAlert={showAlert} />
    </div>
  );
};
