import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <LoadScript  googleMapsApiKey="AIzaSyCuprhlOtAFpOfhaYMs5fYdjdnnla57BLg">
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={10}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
