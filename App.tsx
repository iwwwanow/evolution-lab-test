import { IndexPage } from "./ui/pages";
import { testData } from "./data";
import { mapJsonData } from "./utils";

export default function App() {
  const modulesData = mapJsonData(testData);

  return <IndexPage modulesData={modulesData} />;
}
