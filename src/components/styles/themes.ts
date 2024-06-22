import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#1D2A35",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: "#05CE91",
      secondary: "#FF9D00",
      text: {
        100: "#cbd5e1",
        200: "#B2BDCC",
        300: "#64748b",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#EFF3F3",
      scrollHandle: "#C1C1C1",
      scrollHandleHover: "#AAAAAA",
      primary: "#027474",
      secondary: "#FF9D00",
      text: {
        100: "#334155",
        200: "#475569",
        300: "#64748b",
      },
    },
  },
  "blue-matrix": {
    id: "T_003",
    name: "blue-matrix",
    colors: {
      body: "#101116",
      scrollHandle: "#424242",
      scrollHandleHover: "#616161",
      primary: "#00ff9c",
      secondary: "#60fdff",
      text: {
        100: "#ffffff",
        200: "#c7c7c7",
        300: "#76ff9f",
      },
    },
  },
  espresso: {
    id: "T_004",
    name: "espresso",
    colors: {
      body: "#323232",
      scrollHandle: "#5b5b5b",
      scrollHandleHover: "#393939",
      primary: "#E1E48B",
      secondary: "#A5C260",
      text: {
        100: "#F7F7F7",
        200: "#EEEEEE",
        300: "#5b5b5b",
      },
    },
  },
  "green-goblin": {
    id: "T_005",
    name: "green-goblin",
    colors: {
      body: "#000000",
      scrollHandle: "#2E2E2E",
      scrollHandleHover: "#414141",
      primary: "#E5E500",
      secondary: "#04A500",
      text: {
        100: "#01FF00",
        200: "#04A5B2",
        300: "#E50101",
      },
    },
  },
  ubuntu: {
    id: "T_006",
    name: "ubuntu",
    colors: {
      body: "#2D0922",
      scrollHandle: "#F47845",
      scrollHandleHover: "#E65F31",
      primary: "#80D932",
      secondary: "#80D932",
      text: {
        100: "#FFFFFF",
        200: "#E1E9CC",
        300: "#CDCDCD",
      },
    },
  },
  "florent-flows": {
    id: "T_005",
    name: "florent-flows",
    colors: {
      body: "#3D405B",
      scrollHandle: "#2E2E2E",
      scrollHandleHover: "#414141",
      primary: "#F4F1DE",
      secondary: "#81B29A",
      text: {
        100: "#F2CC8F",
        200: "#04A5B2",
        300: "#E50101",
      },
    },
  },
  mario: {
    id: "T_005",
    name: "mario",
    colors: {
      body: "#F096BE",
      scrollHandle: "#08A936",
      scrollHandleHover: "#414141",
      primary: "#08A936",
      secondary: "#F8BE10",
      text: {
        100: "#E0102F",
        200: "#04A5B2",
        300: "#E50101",
      },
    },
  },
  "one-piece": {
    id: "T_005",
    name: "one-piece",
    colors: {
      body: "#657CDB",
      scrollHandle: "#08A936",
      scrollHandleHover: "#414141",
      primary: "#F2BD93",
      secondary: "#F8BE10",
      text: {
        100: "#972525",
        200: "#EBD138",
        300: "#E50101",
      },
    },
  },
  "canada-but-too-red": {
    id: "T_005",
    name: "canada-but-too-red",
    colors: {
      body: "#E60013",
      scrollHandle: "#08A936",
      scrollHandleHover: "#414141",
      primary: "#AADACA",
      secondary: "#F4D2D8",
      text: {
        100: "#89DDF5",
        200: "#EBD138",
        300: "#E50101",
      },
    },
  },
};

export default theme;
