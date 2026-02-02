import { Text, View, FlatList, Pressable, ImageBackground } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { useState } from 'react';
import styles from "../../themes/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import linearGradient from "expo-linear-gradient";


interface Venue {
  id: string;
  name: string;
  lat: number;
  lng: number;
  time: string;
}

export default function DiscoverScreen() {
  
    const [viewMode, setViewMode] = useState<'Clubs' | 'map'>('Clubs');
    
    function renderVenue({item}: {item: Venue}) {
      return (
        <View style = {styles.card}>
          <Text style = {styles.venueName}>{item.name}</Text>
          <Text style = {styles.meta}>{item.time}</Text>
        </View>
      );
    }

    
    return (
      <ImageBackground
        //source = {{ uri: 'https://miro.medium.com/1*uEH_OCMc2lD1A8kcS6HnzA.jpeg'}}
        resizeMode = 'cover'
        style = {{flex: 2, justifyContent: 'center', backgroundColor: 'black', }}
        
      >
        <SafeAreaView style = {styles.container}>
          
        
          <View style = {styles.header}>
            <Text style = {styles.subtitle}>Live jazz near you</Text>
            <Text style = {styles.title}>Where would you like to go?</Text>
          </View>

          <View style = {styles.toggle}>
            <Pressable onPress = {() => setViewMode('Clubs')}>
              <Text style = {viewMode === 'Clubs' ? styles.active : styles.inactive}>
                Clubs
              </Text>
            </Pressable>
            <Pressable onPress = {() => setViewMode('map')}>
              <Text style = {viewMode === 'map' ? styles.active : styles.inactive}>
                Map
              </Text>
            </Pressable>
          </View>

          <View style = {{flex: 1}}>
            {viewMode === 'Clubs' ? (
            <FlatList 
              data = {mock_venues}
              keyExtractor={(item) => item.id}
              renderItem={renderVenue}
              contentContainerStyle={{paddingBottom: 40}}
            />
            ) : (
            <MapView
              style = {styles.map}
              initialRegion={{
                latitude: 40.7306,
                longitude: -73.9996,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              {mock_venues.map((venue) => (
                <Marker
                  key = {venue.id}
                  coordinate={{latitude: venue.lat, longitude: venue.lng}}
                  title = {venue.name}
                  description = {'Live at ${venue.time}'}
                />
              ))}
            </MapView>
            )}
          </View>
        
        </SafeAreaView>
      </ImageBackground>
    );
}

const mock_venues = [
  {
    id: '1',
    name: 'Blue Note',
    lat: 40.7306,
    lng: -73.9996,
    time: '8:30 pm'
  },
  {
    id: '2',
    name: 'Sebs Club',
    lat: 40.7361,
    lng: -74.0017,
    time: '9:00 pm'
  },
  {
    id: '3',
    name: 'Groovy Blues',
    lat: 39.7306,
    lng: -75.9996,
    time: '8:30 pm'
  },
  {
    id: '4',
    name: 'Sebs Club',
    lat: 40.7361,
    lng: -74.0017,
    time: '9:00 pm'
  },
  {
    id: '5',
    name: 'Blue Note',
    lat: 40.7306,
    lng: -73.9996,
    time: '8:30 pm'
  },
  {
    id: '6',
    name: 'Sebs Club',
    lat: 40.7361,
    lng: -74.0017,
    time: '9:00 pm'
  }
];

