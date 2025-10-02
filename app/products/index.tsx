import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>

        <Link href="/products/best-sellers/playstation-5">
        Playstation 5 best seller (Catch-All)
        </Link>
        <Link href="/products/black-friday/playstation-5">
        Playstation 5 Black Friday Deals (Catch-All)
        </Link>
        <Link href="/products/search/playstation-5">
        Playstation 5 search (Catch-All)
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
})