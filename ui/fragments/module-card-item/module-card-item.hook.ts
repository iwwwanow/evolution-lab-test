import type { UseModuleCardItemProps } from "./module-card-item.interfaces";
import type { UseModuleCardItemReturn } from "./module-card-item.interfaces";

import { getVariantStyles } from "./utils";
import { getPressHandler } from "./utils";

export const useModuleCardItem = ({
  props,
}: UseModuleCardItemProps): UseModuleCardItemReturn => {
  const { status } = props;

  const variantStyles = getVariantStyles(status);
  const handlePress = getPressHandler(status);

  return { variantStyles, handlePress };
};
