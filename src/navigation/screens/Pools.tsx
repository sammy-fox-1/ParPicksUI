import { TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/assets/styles/styles';
import Select from 'react-select';
import { useState, useEffect } from 'react';

export function Pools({ navigation }: any) {
  const [myPools, setMyPools] = useState<{
        "pool_id": number,
        "user_id": string
        "winning_score_num": number,
        "winning_score_display": string,
        "pools": {
            "name": string
            "public": boolean,
            "deleted": boolean,
            "event_id": number,
            "league_id": number,
            "owner_user_id": number | null
        },
        "profiles": {
            "username": string
        }
    }[]>([]);
  const [publicPools, setPublicPools] = useState<{
        "pool_id": number,
        "name": string,
        "event_id": number,
        "league_id": number | null,
        "owner_user_id": number | null,
        "public": boolean,
        "deleted": boolean,
        "events": {
            "name": string,
            "active": boolean,
            "complete": boolean
        }
    }[]>([]);

  const fetchMyPools = () => {
    setMyPools([{
      "pool_id": 35,
      "user_id": "003718e5-80bb-402d-afd5-7485adfe5e85",
      "winning_score_num": -25,
      "winning_score_display": "-25",
      "pools": {
          "name": "Sanderson Farms Championship",
          "public": false,
          "deleted": false,
          "event_id": 27,
          "league_id": 3,
          "owner_user_id": null
      },
      "profiles": {
          "username": "sammy"
      }
    }, {
      "pool_id": 35,
      "user_id": "003718e5-80bb-402d-afd5-7485adfe5e85",
      "winning_score_num": -25,
      "winning_score_display": "-25",
      "pools": {
          "name": "Sanderson Farms Championship",
          "public": false,
          "deleted": false,
          "event_id": 27,
          "league_id": 3,
          "owner_user_id": null
      },
      "profiles": {
          "username": "sammy"
      }
    }]);
  }

  const fetchPulbicPools = () => {
    setPublicPools([{
        "pool_id": 16,
        "name": "The Masters ($5 Entry, PUBLIC)",
        "event_id": 12,
        "league_id": null,
        "owner_user_id": null,
        "public": true,
        "deleted": false,
        "events": {
            "name": "Masters Tournament",
            "active": false,
            "complete": true
        }
    }, {
        "pool_id": 16,
        "name": "The Masters ($5 Entry, PUBLIC)",
        "event_id": 12,
        "league_id": null,
        "owner_user_id": null,
        "public": true,
        "deleted": false,
        "events": {
            "name": "Masters Tournament",
            "active": false,
            "complete": true
        }
    }]);
  }

  useEffect(() => {
    fetchPulbicPools();
    fetchMyPools();
  }, []);

  const options = [
    { value: 'current', label: 'Current' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'past', label: 'Past' }
  ];
  return (
    <div style={{ backgroundColor: 'white', height: '100%', padding: 40}}>
      <div style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
        <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, zIndex: 999}}>
          <ThemedText type="title">My Pools</ThemedText>
          <Select options={options} styles={{
            control: (provided) => ({
              ...provided,
              padding: '5px 10px',
              width: 225,
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected
                ? '#174038' // selected color
                : state.isFocused
                ? '#174038' // hover color
                : 'white',  // default color
              color: state.isSelected || state.isFocused ? 'white' : 'black',
              ':active': {
                backgroundColor: state.isSelected ? '##174038' : '##174038', // <— overrides that blue!
              },
            }),
          }} />
        </ThemedView>
        {myPools.map((pool) => {
          return(
            <div key={pool.pool_id} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 8, marginBottom: 10, border: '0.5px solid #e7e7e7ff'}}>
              <ThemedText type="default">{"Pool #" + pool.pool_id + " | " + pool.pools.name}</ThemedText>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => navigation.navigate('Pool', { poolId: 'abc123' })}
              >
                <Text style={styles.bottomButtonText}>View</Text>
              </TouchableOpacity>
            </div>
          )
        })}
        <ThemedView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, zIndex: 999}}>
          <ThemedText type="title">Public Pools</ThemedText>
          <Select options={options} styles={{
            control: (provided) => ({
              ...provided,
              padding: '5px 10px',
              width: 225,
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected
                ? '#174038' // selected color
                : state.isFocused
                ? '#174038' // hover color
                : 'white',  // default color
              color: state.isSelected || state.isFocused ? 'white' : 'black',
              ':active': {
                backgroundColor: state.isSelected ? '##174038' : '##174038', // <— overrides that blue!
              },
            }),
          }} />
        </ThemedView>
        {publicPools.map((pool) => {
          return(
            <div key={pool.pool_id} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 8, marginBottom: 10, border: '0.5px solid #e7e7e7ff'}}>
              <ThemedText type="default">{"Pool #" + pool.pool_id + " | " + pool.name + "\nEvent: " + pool.events.name}</ThemedText>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => console.log('Logout pressed')}
              >
                <Text style={styles.bottomButtonText}>View</Text>
              </TouchableOpacity>
            </div>
          )
        })}
      </div>
    </div>
  );
}
