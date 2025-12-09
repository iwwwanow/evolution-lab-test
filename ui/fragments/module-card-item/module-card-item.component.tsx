import { Text } from "react-native";
import { Card } from "react-native-paper";
import { moduleCardStyles } from "./module-card-item.style";

import type { ModuleCardItemProps } from "./module-card-item.interfaces";
import type { FC } from "react";

import { useModuleCardItem } from "./module-card-item.hook";

export const ModuleCardItem: FC<ModuleCardItemProps> = (props) => {
  const { id, title, status } = props;
  const { variantStyles, handlePress } = useModuleCardItem({
    props,
  });

  return (
    <Card
      onPress={handlePress}
      style={{ ...moduleCardStyles.container, ...variantStyles.container }}
    >
      <Text style={{ ...moduleCardStyles.text, ...variantStyles.text }}>
        {title}
      </Text>
    </Card>
  );
};
