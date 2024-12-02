import { CSSProperties } from "react"

export type SeldonProps = {
  icon: "sel-icon-default-__default__" | "sel-icon-default-ticket"
  color: "sel-color-default-@swatch.black" | "sel-color-auto"
  margin: "sel-margin-null" | "sel-margin-default-null-null-tight-null"
  font:
    | "sel-font-default-label-null-medium-null-null"
    | "sel-font-default-label-null-null"
}

export const componentStyles: Record<string, CSSProperties> = {
  icon: {
    opacity: 1,
  },
  label: {
    opacity: 1,
    textAlign: "start",
    color: "hsl(0deg 12% 8%)",
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
    backgroundColor: "hsl(0deg 0% 15%)",
    borderTopRightRadius: "86.736rem",
    borderBottomRightRadius: "86.736rem",
    borderBottomLeftRadius: "86.736rem",
    borderTopLeftRadius: "86.736rem",
    direction: "inherit",
  },
}

export const tokenStyles: Record<string, CSSProperties> = {
  "sel-icon-default-__default__": {},
  "sel-icon-default-ticket": {},
  "sel-color-default-@swatch.black": {
    color: "hsl(0deg 12% 8%)",
  },
  "sel-color-auto": {
    color: "hsl(0deg 12% 8%)",
  },
  "sel-margin-null": {},
  "sel-margin-default-null-null-tight-null": {
    marginBottom: "0.41rem",
  },
  "sel-font-default-label-null-medium-null-null": {
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: 600,
    lineHeight: 1,
  },
  "sel-font-default-label-null-null": {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1,
  },
}

export const defaultProps: Record<string, string> = {
  icon: "sel-icon-default-__default__",
  color: "sel-color-default-@swatch.black",
  margin: "sel-margin-null",
  font: "sel-font-default-label-null-medium-null-null",
}
