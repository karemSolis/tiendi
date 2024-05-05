import { StatusBar } from 'expo-status-bar';
import { Welcome } from './screens/welcome';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  return (
    <>
      <SafeAreaProvider>
        <StatusBar backgroundColor='white' style='dark' />
        <Welcome />
      </SafeAreaProvider>
    </>
  );
}


