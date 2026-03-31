# Quick Start Guide

## 📦 Installation du Package

Il y a plusieurs façons d'installer et utiliser ce package.

### Option 1: Installer dans un projet Next.js existant

```bash
cd votre-projet-next.js
npm install weather-time-widget
```

### Option 2: Compiler le package localement

```bash
# Dans le dossier Weather_time
npm install
npm run build

# Dans votre projet Next.js
npm install file:../Weather_time
```

## 🚀 Utilisation basique

### Importer le composant

```tsx
import { WeatherTimeWidget } from 'weather-time-widget';

export default function Home() {
  return (
    <WeatherTimeWidget
      latitude={48.8566}
      longitude={2.3522}
    />
  );
}
```

### Utiliser les hooks

```tsx
'use client';

import { useWeather, useTime } from 'weather-time-widget';

export default function MyComponent() {
  const { weather, loading, error } = useWeather({
    latitude: 48.8566,
    longitude: 2.3522,
  });

  const time = useTime();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>Time: {time.toLocaleTimeString()}</p>
      <p>Temperature: {weather?.temperature}°C</p>
    </div>
  );
}
```

## 🎨 Personnalisation

### Classes CSS personnalisées

```tsx
<WeatherTimeWidget
  latitude={48.8566}
  longitude={2.3522}
  className="bg-blue-500 text-white rounded-lg shadow-lg"
/>
```

### Unités impériales

```tsx
<WeatherTimeWidget
  latitude={48.8566}
  longitude={2.3522}
  units="imperial"
/>
```

### Afficher uniquement la météo ou l'heure

```tsx
{/* Seulement l'heure */}
<WeatherTimeWidget
  latitude={48.8566}
  longitude={2.3522}
  showWeather={false}
/>

{/* Seulement la météo */}
<WeatherTimeWidget
  latitude={48.8566}
  longitude={2.3522}
  showTime={false}
/>
```

## 🔄 Mise à jour des données

Par défaut, les données sont mises à jour toutes les 10 minutes (600000ms).

```tsx
<WeatherTimeWidget
  latitude={48.8566}
  longitude={2.3522}
  refreshInterval={300000} // Mettre à jour toutes les 5 min
/>
```

## 🌍 Fuseaux horaires

```tsx
import { TimeDisplay } from 'weather-time-widget';

<TimeDisplay
  timezone="America/New_York"
  format="12h"
  showDate={true}
/>
```

Liste complète des fuseaux horaires: [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

## 📍 Trouver les coordonnées

Vous pouvez utiliser:
- [Google Maps](https://maps.google.com) - Clic droit sur la localisation
- [OpenStreetMap](https://www.openstreetmap.org) - Clic gauche sur la localisation
- [Nominatim](https://nominatim.openstreetmap.org) - Recherche d'adresse

Exemples de coordonnées:
- Paris: 48.8566, 2.3522
- New York: 40.7128, -74.0060
- Tokyo: 35.6762, 139.6503
- Sydney: -33.8688, 151.2093

## ⚙️ Configuration TypeScript

Le package est entièrement typé. Vous bénéficiez de l'autocomplétion complète:

```tsx
import type { WeatherWidgetProps, WeatherData } from 'weather-time-widget';

const props: WeatherWidgetProps = {
  latitude: 48.8566,
  longitude: 2.3522,
  units: 'metric',
  refreshInterval: 600000,
};
```

## 🐛 Dépannage

### Le widget n'affiche rien

1. Vérifiez que vous utilisez `'use client'` dans un composant Client
2. Attendez le chargement (vérifiez l'état `loading`)
3. Vérifiez la console pour les erreurs

### Les coordonnées ne sont pas correctes

Assurez-vous d'utiliser les bonnes coordonnées (latitude, longitude):
- Latitude: -90 à 90
- Longitude: -180 à 180

### L'API ne répond pas

L'API Open-Meteo est gratuite et sans limite de taux d'appel. Si vous avez des problèmes:
1. Vérifiez votre connexion internet
2. Vérifiez la [status page d'Open-Meteo](https://status.open-meteo.com/)

## 📚 Ressources supplémentaires

- [Open-Meteo Documentation](https://open-meteo.com/en/docs)
- [Lucide React Icons](https://lucide.dev)
- [Next.js Documentation](https://nextjs.org/docs)

## 💡 Exemples avancés

### Dashboard avec plusieurs villes

```tsx
'use client';

import { WeatherTimeWidget } from 'weather-time-widget';

const cities = [
  { name: 'Paris', lat: 48.8566, lon: 2.3522 },
  { name: 'New York', lat: 40.7128, lon: -74.0060 },
  { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
];

export default function CityDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {cities.map(city => (
        <WeatherTimeWidget
          key={city.name}
          latitude={city.lat}
          longitude={city.lon}
          className="shadow-lg rounded-xl"
        />
      ))}
    </div>
  );
}
```

### Adapter les styles à la météo

```tsx
'use client';

import { useWeather } from 'weather-time-widget';

export default function DynamicBackground() {
  const { weather } = useWeather({ latitude: 48.8566, longitude: 2.3522 });

  const bgColor = weather?.isDay ? 'bg-blue-400' : 'bg-slate-800';

  return (
    <div className={`min-h-screen ${bgColor}`}>
      {/* Votre contenu */}
    </div>
  );
}
```

## 📝 License

MIT - Libre d'utilisation à titre personnel ou commercial.
