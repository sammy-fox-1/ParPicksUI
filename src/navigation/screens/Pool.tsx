import { TouchableOpacity, Text, useWindowDimensions, Animated, View, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/assets/styles/styles';
import Select from 'react-select';
import { useState, useEffect, useRef, useMemo} from 'react';
import { PoolInner } from '@/components/pool/Pool';
import { Event } from '@/components/pool/Event';
import { League } from '@/components/pool/League';
import { Rules } from '@/components/pool/Rules';

type TabKey = 'Pool' | 'Event' | 'League' | 'Rules';
const TABS: TabKey[] = ['Pool', 'Event', 'League', 'Rules'];

export function Pool(props:any) {
const [active, setActive] = useState<TabKey>('Pool');
  const { width } = useWindowDimensions();
  const tabWidth = width / TABS.length;

  // animated underline
  const x = useRef(new Animated.Value(0)).current;
  const activeIndex = useMemo(() => TABS.indexOf(active), [active]);
  useEffect(() => {
    Animated.spring(x, { toValue: activeIndex * tabWidth, useNativeDriver: false, bounciness: 8, speed: 15 }).start();
  }, [activeIndex, tabWidth, x]);

  return (
    <div style={{ backgroundColor: 'white', height: '100%', padding: 5, overflow: 'auto' }}>
        <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
            <ThemedView style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 20, zIndex: 999}}>
            <ThemedText type="subtitle">Pool #35</ThemedText>
            <ThemedText type="default">Event: Sanderson Farms Championship</ThemedText>
            <ThemedText type="default">Type: Standard (Pick 8 Drop 2)</ThemedText>
            </ThemedView>
        </div>
        <View style={{ flex: 1 }}>
        {/* Tab bar */}
        <View style={styles.bar}>
            {TABS.map((tab) => {
            const isActive = active === tab;
            return (
                <Pressable
                key={tab}
                onPress={() => setActive(tab)}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                style={[styles.tab, { width: tabWidth }]}
                >
                <Text style={[styles.label, isActive && styles.labelActive]}>{tab}</Text>
                </Pressable>
            );
            })}
            <Animated.View style={[styles.underline, { width: tabWidth, transform: [{ translateX: x }] }]} />
        </View>

        {/* Content */}
        <View style={{ flex: 1, padding: 16}}>
            {active === 'Pool' && <PoolInner/>}
            {active === 'Event' && <Event/>}
            {active === 'League' && <League/>}
            {active === 'Rules' && <Rules/>}
        </View>
        </View>
    </div>
  );
}
