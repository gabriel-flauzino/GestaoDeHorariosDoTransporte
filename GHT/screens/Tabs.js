import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./(tabs)/Home";
import { HistoryScreen } from "./(tabs)/History";
import { MenuScreen } from "./(tabs)/Menu";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabsIcons } from "../constants/BottomTabsIcons";

const Tab = createBottomTabNavigator();

export function TabsScreen() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { paddingBottom: 4 },
        tabBarIcon: ({ focused, color, size }) =>
          <Ionicons name={BottomTabsIcons[route.name][Number(focused)]} color={color} size={size} />
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ title: "Início" }}
        component={HomeScreen} />
      <Tab.Screen
        name="History"
        options={{ title: "Histórico" }}
        component={HistoryScreen}
      />
      <Tab.Screen
        name="Menu"
        options={{ title: "Menu" }}
        component={MenuScreen}
      />
    </Tab.Navigator>
  );
}