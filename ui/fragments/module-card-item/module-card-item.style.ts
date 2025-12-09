import { StyleSheet } from "react-native";

export const moduleCardStyles = StyleSheet.create({
  container: {
    minHeight: 64,

    paddingTop: 32,
    paddingBottom: 12,
    paddingHorizontal: 12,

    gap: 16,
    justifyContent: "flex-end",

    backgroundColor: "white",
    borderWidth: 4,
  },

  text: {
    fontSize: 24,
    fontFamily: "System",
    fontWeight: "bold",
  },
});

export const doneModuleStyles = StyleSheet.create({
  container: {
    borderColor: "green",
    backgroundColor: "green",
  },
  text: {
    color: "white",
  },
});

export const activeModuleStyles = StyleSheet.create({
  container: {
    height: 256,
    borderColor: "orange",
  },
  text: {
    color: "orange",
  },
});

export const lockedModuleStyles = StyleSheet.create({
  container: {
    height: 128,
    borderColor: "grey",
    backgroundColor: "grey",
  },
  text: {
    color: "white",
  },
});
