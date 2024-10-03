"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ContextProps {
  parentAnimation: Variants;
  childrenAnimation: Variants;
}

export const CreatedContext = createContext<ContextProps | any>({} as ContextProps);

export const useCreatedContext = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const context = useContext(CreatedContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return { context, ref, inView };
};


// Define the props interface for the AnimationProvider
interface AnimationProviderProps {
  children: ReactNode;
}

// Define the AnimationContextProps interface
export const ContextProvider = ({ children }: AnimationProviderProps) => {
  const [userFounded, setUserIfFounded] = React.useState<Boolean>(true);

  const parentAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childrenAnimation = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <CreatedContext.Provider
      value={{
        parentAnimation,
        childrenAnimation,
        userFounded,
        setUserIfFounded,
      }}
    >
      {children}
    </CreatedContext.Provider>
  );
};

