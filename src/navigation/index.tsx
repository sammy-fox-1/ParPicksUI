import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pools } from './screens/Pools';
import { Leagues } from './screens/Leagues';
import { Events } from './screens/Events';
import { Players } from './screens/Players';
import { GlobalPool } from './screens/GlobalPool';
import { HowToPlay } from './screens/HowToPlay';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '@/assets/styles/styles';
import { Pool } from './screens/Pool';

function HomeTabs() {
  function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
      <View style={{ flex: 1 }}>
        {/* Default drawer items (your screens) */}
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        {/* Bottom button */}
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => console.log('Logout pressed')}
          >
            <Text style={styles.bottomButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.myProfileButton}
            onPress={() => console.log('Logout pressed')}
          >
            <Text style={styles.bottomButtonText}>My Profile</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
  }

  function CustomTopTabsContent(props: any) {
    return (
      <View style={styles.tabBarContainer}>
        <View style={{ flex: 1 }}>
          <MaterialTopTabBar {...props} />
        </View>
        <View style={{backgroundColor: 'white', flexDirection:'row', width: 250, justifyContent: 'space-around', alignItems: 'center',padding: 10 }}>
          <TouchableOpacity
            style={styles.logoutButtonTop}
            onPress={() => console.log('Logout pressed')}
          >
            <Text style={styles.bottomButtonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myProfileButtonTop}
            onPress={() => console.log('Logout pressed')}
          >
            <Text style={styles.bottomButtonText}>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  const { width } = useWindowDimensions();
  if (width < 600) {
    const Drawer = createDrawerNavigator();
    return (
      <>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Pools" component={Pools} options={{ drawerIcon: ({ color, size }) => <IconSymbol size={size ?? 28} name="person.3.fill" color={color} /> }} />
          <Drawer.Screen name="Leagues" component={Leagues} options={{ drawerIcon: ({ color, size }) => <IconSymbol size={size ?? 28} name="trophy.fill" color={color} /> }} />
          <Drawer.Screen name="Events" component={Events} options={{ drawerIcon: ({ color, size }) => <IconSymbol size={size ?? 28} name="doc.text.fill" color={color} /> }} />
          <Drawer.Screen name="Players" component={Players} options={{ drawerIcon: ({ color, size }) => <IconSymbol size={size ?? 28} name="star.fill" color={color} /> }} />
          <Drawer.Screen name="Global Pool" component={GlobalPool} options={{ drawerIcon: ({ color, size }) => <IconSymbol size={size ?? 28} name="globe" color={color} /> }} />
          <Drawer.Screen name="How To Play" component={HowToPlay} options={{ drawerIcon: ({ color, size }) => <IconSymbol size={size ?? 28} name="questionmark.circle.fill" color={color} /> }} />
          <Drawer.Screen name="Pool" component={Pool} />
        </Drawer.Navigator>
      </>
    );
  }
  const TopTabs = createMaterialTopTabNavigator();
  return (
    <>
      <TopTabs.Navigator tabBar={(props) => <CustomTopTabsContent {...props} />}>
        <TopTabs.Screen name="Pools" component={Pools} options={{ tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.3.fill" color={color} /> }} />
        <TopTabs.Screen name="Leagues" component={Leagues} options={{ tabBarIcon: ({ color }) => <IconSymbol size={28} name="trophy.fill" color={color} /> }} />
        <TopTabs.Screen name="Events" component={Events} options={{ tabBarIcon: ({ color }) => <IconSymbol size={28} name="doc.text.fill" color={color} /> }} />
        <TopTabs.Screen name="Players" component={Players} options={{ tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} /> }} />
        <TopTabs.Screen name="Global Pool" component={GlobalPool} options={{ tabBarIcon: ({ color }) => <IconSymbol size={28} name="globe" color={color} /> }} />
        <TopTabs.Screen name="How To Play" component={HowToPlay} options={{ tabBarIcon: ({ color }) => <IconSymbol size={28} name="questionmark.circle.fill" color={color} /> }} />
      </TopTabs.Navigator>
    </>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        headerShown: false,
      },
    },
    Pool: {
      screen: Pool,
      // options: { title: 'Pool' } // optional
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);