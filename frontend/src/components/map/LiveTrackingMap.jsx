import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { Icon, divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Truck, Navigation, Clock, MapPin } from 'lucide-react';

// Fix for default markers in react-leaflet
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom bike icon
const bikeIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM0QkE1RjYiLz4KPHBhdGggZD0iTTEwIDIwSDIwTDMwIDIwTTIwIDEwTDIwIDMwTTEwIDIwTDMwIDIwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPHN2Zz4K',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

// Custom delivery location icon
const deliveryIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTUiIGZpbGw9IiMxMEI5ODEiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNSIgcj0iNSIgZmlsbD0id2hpdGUiLz4KPHN2Zz4K',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

// Component to animate bike movement
function AnimatedBike({ position, destination }) {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current && destination) {
      // Smooth pan to follow the bike
      map.panTo(position, {
        animate: true,
        duration: 1,
      });
    }
  }, [position, map]);

  return (
    <Marker
      position={position}
      icon={bikeIcon}
      ref={markerRef}
      zIndex={1000}
    >
      <Popup>
        <div className="text-center">
          <Truck className="w-6 h-6 text-blue-600 mx-auto mb-1" />
          <p className="font-semibold">Delivery Partner</p>
          <p className="text-sm text-gray-600">On the way!</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default function LiveTrackingMap() {
  const [deliveryStatus, setDeliveryStatus] = useState('out_for_delivery');
  const [estimatedTime, setEstimatedTime] = useState(25);
  const [bikePosition, setBikePosition] = useState([19.0760, 72.8777]); // Mumbai coordinates
  const [deliveryLocation] = useState([19.0860, 72.8877]); // Nearby location
  const [route, setRoute] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate bike movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBikePosition(prev => {
        // Move bike closer to destination
        const newLat = prev[0] + (deliveryLocation[0] - prev[0]) * 0.02;
        const newLng = prev[1] + (deliveryLocation[1] - prev[1]) * 0.02;
        
        // Update estimated time
        setEstimatedTime(prev => Math.max(1, prev - 0.5));
        
        // Check if reached destination
        const distance = Math.sqrt(
          Math.pow(newLat - deliveryLocation[0], 2) + 
          Math.pow(newLng - deliveryLocation[1], 2)
        );
        
        if (distance < 0.001) {
          setDeliveryStatus('delivered');
          setEstimatedTime(0);
          clearInterval(interval);
        }
        
        return [newLat, newLng];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [deliveryLocation]);

  // Generate route path
  useEffect(() => {
    const routePoints = [];
    const steps = 20;
    
    for (let i = 0; i <= steps; i++) {
      const lat = bikePosition[0] + (deliveryLocation[0] - bikePosition[0]) * (i / steps);
      const lng = bikePosition[1] + (deliveryLocation[1] - bikePosition[1]) * (i / steps);
      routePoints.push([lat, lng]);
    }
    
    setRoute(routePoints);
    setIsLoading(false);
  }, [bikePosition, deliveryLocation]);

  const formatTime = (minutes) => {
    if (minutes <= 0) return 'Delivered';
    if (minutes < 60) return `${Math.round(minutes)} min`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}m`;
  };

  const getStatusColor = () => {
    switch (deliveryStatus) {
      case 'out_for_delivery': return 'text-green-600 bg-green-100';
      case 'delivered': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = () => {
    switch (deliveryStatus) {
      case 'out_for_delivery': return 'Out for Delivery';
      case 'delivered': return 'Delivered Successfully';
      default: return 'Processing';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading live tracking...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Status Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
              {getStatusText()}
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{formatTime(estimatedTime)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Navigation className="w-4 h-4" />
            <span className="text-sm">Live Tracking</span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="h-96 w-full">
          <MapContainer
            center={bikePosition}
            zoom={15}
            style={{ height: '100%', width: '100%' }}
            className="z-10"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Animated Bike Marker */}
            <AnimatedBike position={bikePosition} destination={deliveryLocation} />
            
            {/* Delivery Location Marker */}
            <Marker position={deliveryLocation} icon={deliveryIcon}>
              <Popup>
                <div className="text-center">
                  <MapPin className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <p className="font-semibold">Delivery Address</p>
                  <p className="text-sm text-gray-600">Your destination</p>
                </div>
              </Popup>
            </Marker>
            
            {/* Route Line */}
            {route.length > 1 && (
              <Polyline
                positions={route}
                color="#3B82F6"
                weight={4}
                opacity={0.7}
                dashArray="10, 10"
                className="animate-pulse"
              />
            )}
          </MapContainer>
        </div>
      </div>

      {/* Delivery Details */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Delivery Details</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Delivery Partner</span>
            <span className="font-medium text-gray-900 dark:text-white">Rajesh Kumar</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Contact Number</span>
            <span className="font-medium text-gray-900 dark:text-white">+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Vehicle Type</span>
            <span className="font-medium text-gray-900 dark:text-white">Bike</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Order ID</span>
            <span className="font-medium text-gray-900 dark:text-white">#MH12345678</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Call Delivery Partner
        </button>
        <button className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium">
          Get Directions
        </button>
      </div>
    </div>
  );
}
