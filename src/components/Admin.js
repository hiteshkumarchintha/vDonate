import AdminFeed from "./AdminFeed";

const Admin = (props) => {
  const showAlert = props.showAlert;
  return (
    <div>
      <AdminFeed showAlert={showAlert} />
    </div>
  );
};

export default Admin;
