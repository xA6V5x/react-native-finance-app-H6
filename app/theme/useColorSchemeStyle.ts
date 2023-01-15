import { StyleProp, useColorScheme } from "react-native"

type ColorSchemeName = ReturnType<typeof useColorScheme>

export const useColorSchemeStyle = <T>(styles: { [key in ColorSchemeName]: StyleProp<T> }) => {
  const colorTheme = useColorScheme()
  return styles[colorTheme]
}
