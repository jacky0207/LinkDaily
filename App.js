import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Signup from './screens/Signup';

export default function App() {
  const names = ["Ryan", "Zen", "David"];
  return (
    <Signup />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
