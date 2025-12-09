import type { UseModuleCardItemProps } from "./module-card-item.interfaces";
import type { UseModuleCardItemReturn } from "./module-card-item.interfaces";
import { Alert } from "react-native";

import { doneModuleStyles } from "./module-card-item.style";
import { activeModuleStyles } from "./module-card-item.style";
import { lockedModuleStyles } from "./module-card-item.style";

import { ModuleStatus } from "./module-card-item.interfaces";

const getVariantStyles = (variant?: ModuleStatus) => {
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

const getPressHandler = (variant?: ModuleStatus): (() => void) => {
  switch (variant) {
    case ModuleStatus.Done:
      return () => {};
    case ModuleStatus.Active:
      return () => console.log("Start lesson");
    case ModuleStatus.Locked:
      return () =>
        Alert.alert(
          "Урок закрыт",
          "Этот урок пока недоступен. Пройдите предыдущие модули.",
          [{ text: "OK" }],
        );
    default:
      return () => {};
  }
};

export const useModuleCardItem = ({
  props,
}: UseModuleCardItemProps): UseModuleCardItemReturn => {
  const { id, title, status } = props;

  const variantStyles = getVariantStyles(status);
  const handlePress = getPressHandler(status);

  return { variantStyles, handlePress };
};
