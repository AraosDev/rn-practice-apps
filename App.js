import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MealsApp from './components/MealsApp';
import 'react-native-gesture-handler'

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <MealsApp />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 50,
    // paddingHorizontal: 16,
  }
});
