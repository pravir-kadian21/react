import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong</h2>
      <div>{error?.error?.message}</div>
    </div>
  );
};

export default Error;
