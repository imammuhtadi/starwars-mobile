import { ReactElement } from 'react'
import { StatusBar, StyleSheet, Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from './configs/styles'
import Routes from './routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default function App(): ReactElement {
  StatusBar.setBackgroundColor(Colors.background);

  return (
    <Routes />
  );
}
