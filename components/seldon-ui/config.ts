import { CSSProperties } from "react"

export type SeldonProps = {
  icon: "sel-icon-streaming-app-__default__" | "sel-icon-streaming-app-ticket"
  color: "sel-color-streaming-app-@swatch.black" | "sel-color-auto"
  margin: "sel-margin-null" | "sel-margin-streaming-app-null-null-tight-null"
  font:
    | "sel-font-streaming-app-label-null-medium-null-null"
    | "sel-font-streaming-app-label-null-null"
}

export const componentStyles: Record<string, CSSProperties> = {
  icon: {
    opacity: 1,
  },
  label: {
    opacity: 1,
    textAlign: "start",
    color: "hsl(207deg 2% 10%)",
    alignSelf: "stretch",
    height: "fit-content",
    textTransform: "none",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  button: {
    opacity: 1,
    textTransform: "none",
    flexDirection: "row",
    backgroundColor: "hsl(207deg 100% 62%)",
    borderTopRightRadius: "3325.257rem",
    borderBottomRightRadius: "3325.257rem",
    borderBottomLeftRadius: "3325.257rem",
    borderTopLeftRadius: "3325.257rem",
    direction: "inherit",
  },
}

export const tokenStyles: Record<string, CSSProperties> = {
  "sel-icon-streaming-app-__default__": {},
  "sel-icon-streaming-app-ticket": {},
  "sel-color-streaming-app-@swatch.black": {
    color: "hsl(207deg 2% 10%)",
  },
  "sel-color-auto": {
    color: "hsl(207deg 2% 10%)",
  },
  "sel-margin-null": {},
  "sel-margin-streaming-app-null-null-tight-null": {
    marginBottom: "0.198rem",
  },
  "sel-font-streaming-app-label-null-medium-null-null": {
    fontSize: "0.875rem",
    fontFamily: "Inter",
    fontWeight: 600,
    lineHeight: 1.15,
  },
  "sel-font-streaming-app-label-null-null": {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "0.766rem",
    lineHeight: 1.15,
  },
}

export const defaultProps: Record<string, string> = {
  icon: "sel-icon-streaming-app-__default__",
  color: "sel-color-streaming-app-@swatch.black",
  margin: "sel-margin-null",
  font: "sel-font-streaming-app-label-null-medium-null-null",
}
