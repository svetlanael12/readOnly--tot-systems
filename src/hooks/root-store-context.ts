import { createContext, useContext } from "react";
import { RootStore } from "../store/globalStore"

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error(
      "You have forgotten to wrap your root component with RootStoreProvider"
    );
  }
  return context;
};