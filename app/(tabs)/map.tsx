import { View, Text, FlatList, StyleSheet} from 'react-native';
import styles from '../../themes/styles';

export default function MapTab(){
    return (
        <View style = {styles.container}>
            <Text>Traverse the map to find the nearest club</Text>
        </View>
    );
}

