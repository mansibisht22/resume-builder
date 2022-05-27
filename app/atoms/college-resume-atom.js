import { atom } from "recoil";

export const nameAtom = atom({
  key: "nameAtom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const emailAtom = atom({
  key: "emailAtom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const phoneAtom = atom({
  key: "phoneAtom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const collegeNameAtom = atom({
  key: "collegeNameAtom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
export const courseNameAtom = atom({
  key: "courseNameAtom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const graduationYearAtom = atom({
  key: "graduationYearAtom", // unique ID (with respect to other atoms/selectors)
  default: "2022", // default value (aka initial value)
});

export const projectListAtom = atom({
  key: "projectListAtom", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const skillListAtom = atom({
  key: "skillListAtom", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
