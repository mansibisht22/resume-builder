import { atom } from "recoil";

export const stepAtom = atom({
  key: "stepAtom", // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});
