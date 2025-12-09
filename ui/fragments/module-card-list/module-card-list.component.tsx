import { ModuleCardItem } from "../module-card-item";
import { FlatList } from "react-native";

import type { ModuleCardListProps } from "./module-card-list.interfaces";
import type { ModuleCardItemProps } from "../module-card-item";
import type { FC } from "react";
import { moduleCardListStyles } from "./module-card-list.style";

export const ModuleCardList: FC<ModuleCardListProps> = ({ modulesData }) => {
  const renderItem = ({ item }: { item: ModuleCardItemProps }) => (
    <ModuleCardItem {...item} />
  );

  return (
    <FlatList
      data={modulesData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={moduleCardListStyles.container}
      showsVerticalScrollIndicator={true}
    />
  );
};
