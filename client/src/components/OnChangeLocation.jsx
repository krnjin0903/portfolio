import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetTodoList } from "../features/todoSlice";

const OnChangeLocation = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("change Location");
    window.scrollTo(0, 0);
    dispatch(resetTodoList());
  }, [pathname]);
  return null;
};

export default OnChangeLocation;
