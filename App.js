import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GuessNumber from './components/GuessNumber';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <GuessNumber />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  }
});
