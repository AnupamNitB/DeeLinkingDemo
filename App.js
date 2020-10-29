import * as React from 'react';
import {View, Text, Button, linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 45})}
      />
    </View>
  );
}
function DetailsScreen({navigation, route}) {
  const {itemId} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen{itemId}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  const deepLinking = {
    prefixes: ['https://demoapp.com', 'demoApp://'],
    // prefixes: ['app://', 'https://app.com'],
    config: {
      Home: 'HomePath',
      Details: {
        path: 'Details/:itemId',
        params: {
          itemId: null,
        },
      },
    },
  };
  //inside prefixes 1 external link https://www.google.com
  //2 one demoApp://
  // in confing u pass initalRouteName here in my case is Home and 2 aru anything pass as key like
  return (
    <NavigationContainer linking={deepLinking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
