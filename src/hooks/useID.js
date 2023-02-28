import { useId } from "react";

const useUniqueID = () => {
  const ID = useId();
  return ID;
};
export default useUniqueID;
 