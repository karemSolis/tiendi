import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";

import { StyleSheet, View, Text } from 'react-native';

export const Welcome = () => {
  const insets = useSafeAreaInsets() /*HOOK PARA VER  */

  console.log(insets)

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>
        <Text stile={styles.title}>TIENDI</Text>
        <Text stile={styles.description}>Somos tienda de plantas</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 14,
    color: 'gray',
  }

});