import type { IndexPageProps } from "./index.interfaces";
import type { FC } from "react";
import { ModuleCardList } from "../fragments";

export const IndexPage: FC<IndexPageProps> = ({ modulesData }) => {
  return <ModuleCardList modulesData={modulesData} />;
};
