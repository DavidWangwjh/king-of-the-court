import React, { createContext, useContext, useEffect, useState } from "react";

import { getUser } from "@/service/AuthService";
import { User } from "@/constants/Types";

// Define a type for your context
interface GlobalContextType {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
    setUser: (user: User | null) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}
  
// Create the context with an initial value (or `undefined`)
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

type GlobalProviderProps = {
    children: React.ReactNode;
}

const GlobalProvider = (props: GlobalProviderProps) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getUser()
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setUser(res);
          } else {
            setIsLoggedIn(false);
            setUser(null);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                loading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;