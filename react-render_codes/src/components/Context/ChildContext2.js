import React, { useContext } from "react";
import { CountContextRef } from "./ParentContext2";

export const ChildA = () => {
  console.log("Rendering childA...");

  return(
    <div>
        ChildA
        <ChildB/>
    </div>
  )
};

export const MemoChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("Rendering childB...");

  return(
    <div>
        ChildB
        <ChildC />
    </div>
  )
};

export const ChildC = () => {
  const count = useContext(CountContextRef);
  console.log("Rendering childC...");

  return(
    <div>
        ChildC count:{count}
    </div>
  )
};
