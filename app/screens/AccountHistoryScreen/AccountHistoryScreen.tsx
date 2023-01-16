import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen } from "../../components"
import { AccountCardList } from "./AccountCardList"
import { RecentTransactionsView } from "./RecentTransactionsView"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { useColorSchemeStyle } from "../../theme/useColorSchemeStyle"
import { AccountDTO, api, TransactionDTO } from "../../services/api"

export const AccountHistoryScreen = observer(function AccountHistoryScreen() {
  const $rootColorSchemeStyle = useColorSchemeStyle({
    light: $rootLight,
    dark: $rootDark,
  })
  const $styles = [$root, $rootColorSchemeStyle]

  const bottomTabBarHeight = useBottomTabBarHeight()

  const [accounts, setAccounts] = useState<AccountDTO[]>()
  const [activeAccount, setActiveAccount] = useState<AccountDTO>()
  const [transactions, setTransactions] = useState<TransactionDTO[]>()

  useEffect(() => {
    api.getAccounts().then(({ data }) => {
      setAccounts(data)
      setActiveAccount(data[0])
    })
  }, [])

  useEffect(() => {
    if (activeAccount) {
      setTransactions(undefined)
      api.getTransactions(activeAccount.id).then(({ data }) => {
        setTransactions(data)
      })
    }
  }, [activeAccount])

  return (
    <Screen
      style={$styles}
      preset="scroll"
      contentContainerStyle={{ paddingBottom: bottomTabBarHeight }}
    >
      {accounts && (
        <AccountCardList
          style={$accountCardList}
          accounts={accounts}
          activeAccount={accounts[0]}
          onChangeActiveAccount={setActiveAccount}
        />
      )}
      {transactions && (
        <RecentTransactionsView style={$recentTransactions} transactions={transactions} />
      )}
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
