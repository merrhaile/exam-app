import React, { useContext, useEffect, useReducer } from "react";

const AppContext = React.createContext();
function reducer(state, action) {
  if (action.type === "css") {
    return { ...state, css: state.css + 1 };
  }
  if (action.type === "javascript") {
    return { ...state, javascript: state.javascript + 1 };
  }
  if (action.type === "react") {
    return { ...state, react: state.react + 1 };
  }
  if (action.type === "total") {
    return {
      ...state,
      total: Math.round(
        ((state.css + state.react + state.javascript) / 30) * 100
      ),
    };
  }
}
const defaultState = {
  react: 0,
  javascript: 0,
  css: 0,
  total: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleResult = (str) => {
    console.log(state.total);
    if (str === "css") {
      dispatch({ type: "css" });
      dispatch({ type: "total" });
    }
    if (str === "javascript") {
      dispatch({ type: "javascript" });
      dispatch({ type: "total" });
    }
    if (str === "react") {
      dispatch({ type: "react" });
      dispatch({ type: "total" });
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <AppContext.Provider value={{ state, handleResult }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
