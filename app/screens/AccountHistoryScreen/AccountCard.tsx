import * as React from "react"
import { Pressable, StyleProp, TextStyle, View, ViewStyle, ScrollView } from "react-native"
import { observer } from "mobx-react-lite"
import { typography } from "../../theme"
import { Text } from "../../components/Text"
import { Icon } from "../../components/Icon"

export interface AccountCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const AccountCard = observer(function AccountCard(props: AccountCardProps) {
  const { style } = props

  const $styles = [$container, style]

  const currencies = ["EUR", "USD", "GBR"]
  const [activeCurrency, setActiveCurrency] = React.useState(currencies[0])

  return (
    <View style={$styles}>
      <View style={$accountSummary}>
        <View style={$accountSummaryLeft}>
          <Text style={$accountName}>Current Account</Text>
          <Text style={$accountNumber}>1234-4567-3456-3456</Text>
        </View>
        <View style={$accountSummaryRight}>
          <Pressable style={$accountMoreButton} onPress={() => {}}>
            <Icon size={24} icon={"more"} color={"white"} />
          </Pressable>
        </View>
      </View>

      <ScrollView style={[$accountCurrencySwitcher, $currencyList]} horizontal>
        {currencies.map((currency) => (
          <Pressable
            key={currency}
            style={[$currency, activeCurrency === currency ? $currencyActive : null]}
            onPress={() => setActiveCurrency(currency)}
          >
            <Text
              style={[$currencyLabel, activeCurrency === currency ? $currencyLabelActive : null]}
            >
              {currency}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={$accountBalance}>76.451,00</Text>
      <Text style={$accountBalanceLabel}>Current balance</Text>
    </View>
  )
})

const $container: ViewStyle = {
  paddingHorizontal: 15,
  paddingTop: 10,
  paddingBottom: 13,
  backgroundColor: "white",
  borderRadius: 25,
}

const $accountName: TextStyle = {
  fontSize: 22,
  fontFamily: typography.primary.bold,
  color: "#16110D",
}
const $accountNumber: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.semiBold,
  color: "#16110D",
}
const $accountSummary: ViewStyle = {
  flexDirection: "row",
}
const $accountSummaryLeft: ViewStyle = {
  flex: 1,
}
const $accountSummaryRight: ViewStyle = {
  marginLeft: "auto",
}
const $accountMoreButton: ViewStyle = {
  backgroundColor: "#F76654",
  borderRadius: 20,
  width: 40,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
}
const $accountCurrencySwitcher: ViewStyle = {}
const $accountBalance: TextStyle = {
  lineHeight: 41,
  fontSize: 34,
  fontFamily: typography.primary.bold,
  color: "#16110D",
}
const $accountBalanceLabel: TextStyle = {
  fontSize: 15,
  fontFamily: typography.primary.normal,
  color: "#16110D",
}

const $currencyList: ViewStyle = {
  paddingVertical: 16,
}
const $currency: ViewStyle = {
  borderRadius: 8,
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginRight: 10,
}
const $currencyActive: ViewStyle = {
  backgroundColor: "#523CF8",
}
const $currencyLabel: TextStyle = {
  fontSize: 12,
  lineHeight: 15,
  fontFamily: typography.primary.semiBold,
  color: "#16110D",
}
const $currencyLabelActive: TextStyle = {
  color: "white",
}
