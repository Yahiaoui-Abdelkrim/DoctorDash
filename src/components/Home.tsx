import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { HomePage } from "./Page";
import { AuthPage } from "../components/AuthPage";

const Home = () => {
  const { status, userId } = useContext(AuthContext);
  if (status === "checking")
    return (
      <p className="loading">
        <span>Checking credentials, wait a moment...</span>
      </p>
    );

  return (
    <main>
      {status === "authenticated" && userId ? <HomePage /> : <AuthPage />}
    </main>
  );
};
export default Home;
