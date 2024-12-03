import { CSSProperties } from "react"
import { SelButton } from "./SelButton"
import * as config from "./config"

type SelActionBarProps = {
  width?: config.SeldonProps["width"]
  height?: config.SeldonProps["height"]
  orientation?: config.SeldonProps["orientation"]
  background?: config.SeldonProps["background"]
  corners?: config.SeldonProps["corners"]
  padding?: config.SeldonProps["padding"]
} & React.SVGProps<SVGSVGElement>

export function SelActionBar(props: SelActionBarProps) {
  const width = props.width ?? config.defaultProps.width
  const styles: CSSProperties = {
    ...config.componentStyles.actionBar,
    ...config.tokenStyles[width],
  }
  return <></>
}

type SelProductCardProps = {
  title: string
  description: string
  buttons: React.ReactNode[]
}

function SelProductCard(props: SelProductCardProps) {
  return (
    <div>
      <SelTitle>{props.title}</SelTitle>
      <SelDescription>{props.description}</SelDescription>
      <SelActionBar>{props.buttons}</SelActionBar>
    </div>
  )
}

;<SelProductCard
  buttons={[
    <SelButton color="sel-color-auto" />,
    <SelButton color="sel-color-auto" />,
  ]}
/>
