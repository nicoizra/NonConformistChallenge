import { useState, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { Alert } from 'react-native';
import { Location } from '../types';

export const useLocation = () => {
  const [location, setLocation] = useState<Location>(null);

  useEffect(() => {
    const requestLocation = async () => {
      try {
        await Geolocation.requestAuthorization('whenInUse');
        Geolocation.getCurrentPosition(
          (position) => setLocation(position.coords),
          (_) => Alert.alert('Error', 'No se pudo obtener la ubicación.'),
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } catch (error) {
        Alert.alert('Error', 'Permiso de ubicación denegado.');
      }
    };

    requestLocation();
  }, []);

  return location;
};
