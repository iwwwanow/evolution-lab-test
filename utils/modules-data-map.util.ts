import type { testData } from "../data";
import { ModuleStatus } from "../ui/fragments";
import type { ModuleCardItemProps } from "../ui/fragments";

function toModuleStatus(status: string): ModuleStatus {
  switch (status) {
    case "done":
      return ModuleStatus.Done;
    case "active":
      return ModuleStatus.Active;
    case "locked":
      return ModuleStatus.Locked;
    default:
      return ModuleStatus.Locked;
  }
}

export const mapJsonData = (
  jsonData: typeof testData,
): Array<ModuleCardItemProps> => {
  return jsonData.map((item) => ({
    id: item.id,
    title: item.title,
    status: toModuleStatus(item.status),
  }));
};
