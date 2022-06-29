import AgentFeed from "./AgentFeed";

const Agent = (props) => {
  const showAlert = props.showAlert;
  return (
    <div>
      <AgentFeed showAlert={showAlert} />
    </div>
  );
};

export default Agent;
