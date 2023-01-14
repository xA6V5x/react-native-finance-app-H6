import * as React from "react"
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

export interface HeaderRightButtonProps extends TouchableOpacityProps {}

export const HeaderRightButton = observer(function HeaderRightButton(
  props: HeaderRightButtonProps,
) {
  const { style } = props
  const $styles = [$container, style]

  return <TouchableOpacity style={$styles} />
})

const $container: ViewStyle = {
  width: 48,
  height: 48,
  alignItems: "flex-end",
  justifyContent: "center",
}
