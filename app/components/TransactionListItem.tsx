import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { typography } from "../theme"
import { Text } from "./Text"
import { Icon } from "./Icon"

export interface TransactionListItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

export const TransactionListItem = observer(function TransactionListItem(
  props: TransactionListItemProps,
) {
  const { style } = props
  const $styles = [$transaction, style]

  return (
    <View style={$styles}>
      <View style={$transactionType}>
        <Icon icon="transactionAuto" size={18} color="white" />
      </View>
      <View style={$transactionSummary}>
        <Text style={$transactionTitle} numberOfLines={1}>
          "Golub" Taxi Transportation
        </Text>
        <Text style={$transactionDateTime}>20th May, 18:39</Text>
      </View>
      <View style={$transactionValue}>
        <Text style={[$transactionAmount, $transactionAmountMinus]}>-345,00</Text>
        <Text style={$transactionCurrency}>EUR</Text>
      </View>
    </View>
  )
})

const $transaction: ViewStyle = {
  flexDirection: "row",
}

const $transactionType: ViewStyle = {
  backgroundColor: "#F76654",
  width: 30,
  height: 30,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
  marginRight: 15,
  flexShrink: 0,
}

const $transactionSummary: ViewStyle = {
  flex: 1,
}
const $transactionValue: ViewStyle = {
  flexShrink: 0,
}

const $transactionTitle: TextStyle = {
  color: "#16110D",
  fontFamily: typography.primary.semiBold,
  fontSize: 12,
  lineHeight: 15,
}
const $transactionDateTime: TextStyle = {
  marginTop: 2,
  color: "#C4C4C4",
  fontFamily: typography.primary.semiBold,
  fontSize: 11,
  lineHeight: 13,
}
const $transactionAmount: TextStyle = {
  fontFamily: typography.primary.semiBold,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "right",
}
const $transactionAmountPlus: TextStyle = {
  color: "#523CF8",
}
const $transactionAmountMinus: TextStyle = {
  color: "#F76654",
}
const $transactionCurrency: TextStyle = {
  marginTop: 2,
  color: "#C4C4C4",
  fontFamily: typography.primary.semiBold,
  fontSize: 11,
  lineHeight: 13,
  textAlign: "right",
}
