import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { AccountCardList } from "./AccountCardList"
import { RecentTransactionsView } from "./RecentTransactionsView"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { useColorSchemeStyle } from "../../theme/useColorSchemeStyle"

export const AccountHistoryScreen = observer(function AccountHistoryScreen() {
  const $rootColorSchemeStyle = useColorSchemeStyle({
    light: $rootLight,
    dark: $rootDark,
  })
  const $styles = [$root, $rootColorSchemeStyle]

  const bottomTabBarHeight = useBottomTabBarHeight()

  return (
    <Screen
      style={$styles}
      preset="scroll"
      contentContainerStyle={{ paddingBottom: bottomTabBarHeight }}
    >
      <AccountCardList style={$accountCardList} />
      <RecentTransactionsView style={$recentTransactions} />
    </Screen>
  )
})

const SCREEN_PADDING_HORIZONTAL = 12

const $root: ViewStyle = {
  flex: 1,
}
const $rootLight: ViewStyle = {
  backgroundColor: "#523CF8",
}
const $rootDark: ViewStyle = {
  backgroundColor: "#16110D",
}

const $accountCardList: ViewStyle = {
  marginTop: 20,
}

const $recentTransactions: ViewStyle = {
  marginTop: 11,
  marginHorizontal: SCREEN_PADDING_HORIZONTAL,
}
