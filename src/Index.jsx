import { ActivityIndicator, StatusBar, View, useColorScheme } from 'react-native';

import AppNavigation from "./navigation/index"
import { COLOURS } from './assets/COLOURS';
import { Provider as StoreProvider } from 'react-redux';
import { init } from "./db";
import { store } from "./redux"
import { styles } from './styles';
import { useFonts } from "expo-font"

init()
.then(() => {
  console.log("Database Initialized");
})
.catch((err) => {
  console.log("Database Initialization Failed");
  console.log(err);
});

const App = () => {

  const [loaded] = useFonts({
    'Thin': require('./assets/fonts/IBMPlexMono-Thin.ttf'),
    'ThinItalic': require('./assets/fonts/IBMPlexMono-ThinItalic.ttf'),
    'ExtraLight': require('./assets/fonts/IBMPlexMono-ExtraLight.ttf'),
    'ExtraLightItalic': require('./assets/fonts/IBMPlexMono-ExtraLightItalic.ttf'),
    'Light': require('./assets/fonts/IBMPlexMono-Light.ttf'),
    'LightItalic': require('./assets/fonts/IBMPlexMono-LightItalic.ttf'),
    'Regular': require('./assets/fonts/IBMPlexMono-Regular.ttf'),
    'Italic': require('./assets/fonts/IBMPlexMono-Italic.ttf'),
    'Medium': require('./assets/fonts/IBMPlexMono-Medium.ttf'),
    'MediumItalic': require('./assets/fonts/IBMPlexMono-MediumItalic.ttf'),
    'SemiBold': require('./assets/fonts/IBMPlexMono-SemiBold.ttf'),
    'SemiBoldItalic': require('./assets/fonts/IBMPlexMono-SemiBoldItalic.ttf'),
    'Bold': require('./assets/fonts/IBMPlexMono-Bold.ttf'),
    'BoldItalic': require('./assets/fonts/IBMPlexMono-BoldItalic.ttf')
  });

  if (!loaded) {
    return(
      <View style={styles.containerLoader}>
        <ActivityIndicator
          size='large'
          colors={COLOURS[useColorScheme()].red}
        />
      </View>
    );
  };
 
  return (
    <StoreProvider store={store} >
      <View style={styles.container}>
        <StatusBar 
          barStyle={ useColorScheme() !== 'light' ? 'light-content' : 'dark-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <AppNavigation/>
      </View>
    </StoreProvider>
  );
  
};

export default App;