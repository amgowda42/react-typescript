type StausType = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StausType) => {
  let message;
  if (status === "loading") {
    message = "Loading";
  } else if (status === "success") {
    message = "Success";
  } else if (status === "error") {
    message = "Error";
  }
  return (
    <div>
      <h4>Status</h4>
      {message}
    </div>
  );
};

export default Status;
