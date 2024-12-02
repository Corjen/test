import { CSSProperties } from "react"

export type SeldonProps = {
  icon:
    | "sel-icon-default-__default__"
    | "sel-icon-default-ticket"
    | "sel-icon-rijks-account"
    | "sel-icon-rijks-ticket"
    | "sel-icon-moco-account"
  color:
    | "sel-color-default-@swatch.black"
    | "sel-color-auto"
    | "sel-color-default-@swatch.white"
    | "sel-color-rijks-@swatch.background"
    | "sel-color-rijks-@swatch.black"
  margin: "sel-margin-null" | "sel-margin-default-null-null-tight-null"
  font:
    | "sel-font-default-label-null-medium-null-null"
    | "sel-font-default-label-null-null"
    | "sel-font-rijks-label-null-null"
    | "sel-font-moco-label-null-null"
  "button.buttonSize":
    | "sel-buttonSize-default-@fontSize.medium"
    | "sel-buttonSize-default-@fontSize.large"
    | "sel-buttonSize-rijks-@fontSize.medium"
    | "sel-buttonSize-rijks-@fontSize.small"
    | "sel-buttonSize-moco-@fontSize.medium"
  "button.variant":
    | "sel-variant-icon+label"
    | "sel-variant-label-only"
    | "sel-variant-icon-only"
  "button.iconPosition": "sel-iconPosition-start" | "sel-iconPosition-end"
  border:
    | "sel-border-null"
    | "sel-border-rijks-null-solid-background-xlarge-null"
  background:
    | "sel-background-default-primary"
    | "sel-background-rijks-gray"
    | "sel-background-rijks-#e9e9e9"
    | "sel-background-moco-primary"
  corners:
    | "sel-corners-default-rounded-rounded-rounded-rounded"
    | "sel-corners-default-squared-squared-squared-squared"
    | "sel-corners-rijks-rounded-rounded-rounded-rounded"
    | "sel-corners-moco-rounded-rounded-rounded-rounded"
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
    direction: "inherit",
  },
}

export const tokenStyles: Record<string, CSSProperties> = {
  "sel-icon-default-__default__": {},
  "sel-icon-default-ticket": {},
  "sel-icon-rijks-account": {},
  "sel-icon-rijks-ticket": {},
  "sel-icon-moco-account": {},
  "sel-color-default-@swatch.black": {
    color: "hsl(0deg 12% 8%)",
  },
  "sel-color-auto": {
    color: "hsl(0deg 12% 8%)",
  },
  "sel-color-default-@swatch.white": {
    color: "hsl(0deg 12% 98%)",
  },
  "sel-color-rijks-@swatch.background": {
    color: "hsl(18deg 12% 8%)",
  },
  "sel-color-rijks-@swatch.black": {
    color: "hsl(18deg 12% 8%)",
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
  "sel-font-rijks-label-null-null": {
    fontFamily: "Libre Baskerville",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1,
  },
  "sel-font-moco-label-null-null": {
    fontFamily: "Playfair Display",
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: 1,
  },
  "sel-border-null": {},
  "sel-border-rijks-null-solid-background-xlarge-null": {
    borderWidth: "0.366rem",
    borderStyle: "solid",
    borderColor: "hsl(18deg 12% 8%)",
  },
  "sel-background-default-primary": {
    backgroundColor: "hsl(0deg 0% 15%)",
  },
  "sel-background-rijks-gray": {
    backgroundColor: "hsl(18deg 12% 56%)",
  },
  "sel-background-rijks-#e9e9e9": {
    backgroundColor: "#e9e9e9",
  },
  "sel-background-moco-primary": {
    backgroundColor: "hsl(352deg 85% 68%)",
  },
  "sel-corners-default-rounded-rounded-rounded-rounded": {
    borderTopRightRadius: "86.736rem",
    borderBottomRightRadius: "86.736rem",
    borderBottomLeftRadius: "86.736rem",
    borderTopLeftRadius: "86.736rem",
  },
  "sel-corners-default-squared-squared-squared-squared": {
    borderTopRightRadius: "0rem",
    borderBottomRightRadius: "0rem",
    borderBottomLeftRadius: "0rem",
    borderTopLeftRadius: "0rem",
  },
  "sel-corners-rijks-rounded-rounded-rounded-rounded": {
    borderTopRightRadius: "313.764rem",
    borderBottomRightRadius: "313.764rem",
    borderBottomLeftRadius: "313.764rem",
    borderTopLeftRadius: "313.764rem",
  },
  "sel-corners-moco-rounded-rounded-rounded-rounded": {
    borderTopRightRadius: "25.629rem",
    borderBottomRightRadius: "25.629rem",
    borderBottomLeftRadius: "25.629rem",
    borderTopLeftRadius: "25.629rem",
  },
}

export const defaultProps: Record<string, string> = {
  icon: "sel-icon-default-__default__",
  color: "sel-color-default-@swatch.black",
  margin: "sel-margin-null",
  font: "sel-font-default-label-null-medium-null-null",
  "button.buttonSize": "sel-buttonSize-default-@fontSize.medium",
  "button.variant": "sel-variant-icon+label",
  "button.iconPosition": "sel-iconPosition-start",
  border: "sel-border-null",
  background: "sel-background-default-primary",
  corners: "sel-corners-default-rounded-rounded-rounded-rounded",
}
