import type { StyleSheet } from "react-native";

export enum ModuleStatus {
  Done = "done",
  Active = "active",
  Locked = "locked",
}

export interface ModuleCardItemProps {
  id: number;
  title: string;
  status?: ModuleStatus;
}

export interface UseModuleCardItemProps {
  props: ModuleCardItemProps;
}

export interface UseModuleCardItemReturn {
  variantStyles: ReturnType<typeof StyleSheet.create>;
  handlePress: () => void;
}
