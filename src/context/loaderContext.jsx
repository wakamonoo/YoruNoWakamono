"use client";
import Loader from "@/components/layout/loader";
import { createContext, useEffect, useState } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = async () => {
      await new Promise((resolve) =>
        setTimeout(() => resolve("done loading"), 4000),
      );
      setLoading(false);
    };

    handleLoad();
  }, []);

  return (
    <LoaderContext.Provider value={{ loading }}>
      {children}
      {loading && <Loader onFinish={() => setLoading(false)} />}
    </LoaderContext.Provider>
  );
};
