import { ModuleStatus } from "../module-card-item.interfaces";
import { doneModuleStyles } from "../module-card-item.style";
import { activeModuleStyles } from "../module-card-item.style";
import { lockedModuleStyles } from "../module-card-item.style";

import type { StyleSheet } from "react-native";

export const getVariantStyles = (
  variant?: ModuleStatus,
): ReturnType<typeof StyleSheet.create> => {
  switch (variant) {
    case ModuleStatus.Done:
      return doneModuleStyles;
    case ModuleStatus.Active:
      return activeModuleStyles;
    case ModuleStatus.Locked:
      return lockedModuleStyles;
    default:
      return lockedModuleStyles;
  }
};
