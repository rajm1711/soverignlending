"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface ContactMapProps {
  company: {
    lat: number;
    lng: number;
    name: string;
    address: string;
  };
}

export default function ContactMap({ company }: ContactMapProps) {
  return (
    <MapContainer
      center={[company.lat, company.lng]}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full rounded-2xl relative z-0"
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[company.lat, company.lng]} icon={customIcon}>
        <Popup>
          {company.name}
          <br />
          {company.address}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
