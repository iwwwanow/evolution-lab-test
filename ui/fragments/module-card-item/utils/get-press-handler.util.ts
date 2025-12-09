import { Alert } from "react-native";
import { ModuleStatus } from "../module-card-item.interfaces";
import { moduleCardItemLocales } from "../module-card-item.locales";

export const getPressHandler = (variant?: ModuleStatus): (() => void) => {
  switch (variant) {
    case ModuleStatus.Done:
      return () => {};
    case ModuleStatus.Active:
      return () => console.log("Start lesson");
    case ModuleStatus.Locked:
      return () =>
        Alert.alert(
          moduleCardItemLocales.closedLesson,
          moduleCardItemLocales.unavailableLesson,
          [{ text: "OK" }],
        );
    default:
      return () => {};
  }
};
