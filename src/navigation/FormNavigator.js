import { createStackNavigator } from '@react-navigation/stack';
import DefaultInfoScreen from '../screens/healthCheckform/DefaultInfoScreen';

const Stack = createStackNavigator();

export default function FormNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DefaultInfo" component={DefaultInfoScreen} />
    </Stack.Navigator>
  );
}
