import { Collection } from "./collection";
import { getHtmlFactory } from "./html/factory";
import { UiCollection } from "./i-face-collection";

let collection: Collection | null = null;

const variants = {
  html: getHtmlFactory,
};

export const init = (variant: keyof typeof variants): void => {
  collection = variants[variant]();
};

type ControlProvider = <T extends keyof UiCollection>(
  type: T
) => ReturnType<UiCollection[T]>;

export const getControl: ControlProvider = (type) => {
  if (collection === null) {
    throw new Error("not initialized");
  }
  return collection[type]() as never;
};
