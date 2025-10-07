import { TouchableOpacity, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/assets/styles/styles';
import Select from 'react-select';

export function Pools() {
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
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 8, marginBottom: 70, border: '0.5px solid #e7e7e7ff'}}>
          <ThemedText type="default">Public Pools</ThemedText>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => console.log('Logout pressed')}
          >
            <Text style={styles.bottomButtonText}>View</Text>
          </TouchableOpacity>
        </div>
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
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 8, marginBottom: 40, border: '0.5px solid #e7e7e7ff'}}>
          <ThemedText type="default">Public Pools</ThemedText>
          <TouchableOpacity
            style={styles.viewButton}
            onPress={() => console.log('Logout pressed')}
          >
            <Text style={styles.bottomButtonText}>View</Text>
          </TouchableOpacity>
        </div>
      </div>
    </div>
  );
}
