import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      goToLoginPage(history);
    }
  }, [history]);
};