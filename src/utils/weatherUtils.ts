const WMO_CODE_MAP: Record<number, { description: string; icon: string }> = {
  0: { description: 'Clear sky', icon: 'sun' },
  1: { description: 'Mainly clear', icon: 'sun' },
  2: { description: 'Partly cloudy', icon: 'cloud' },
  3: { description: 'Overcast', icon: 'cloud' },
  45: { description: 'Foggy', icon: 'cloud' },
  48: { description: 'Foggy', icon: 'cloud' },
  51: { description: 'Light drizzle', icon: 'cloud-rain' },
  53: { description: 'Moderate drizzle', icon: 'cloud-rain' },
  55: { description: 'Dense drizzle', icon: 'cloud-rain' },
  61: { description: 'Slight rain', icon: 'cloud-rain' },
  63: { description: 'Moderate rain', icon: 'cloud-rain' },
  65: { description: 'Heavy rain', icon: 'cloud-rain' },
  71: { description: 'Slight snow', icon: 'cloud-snow' },
  73: { description: 'Moderate snow', icon: 'cloud-snow' },
  75: { description: 'Heavy snow', icon: 'cloud-snow' },
  77: { description: 'Snow grains', icon: 'cloud-snow' },
  80: { description: 'Slight rain showers', icon: 'cloud-rain' },
  81: { description: 'Moderate rain showers', icon: 'cloud-rain' },
  82: { description: 'Violent rain showers', icon: 'cloud-rain' },
  85: { description: 'Slight snow showers', icon: 'cloud-snow' },
  86: { description: 'Heavy snow showers', icon: 'cloud-snow' },
  95: { description: 'Thunderstorm', icon: 'zap' },
  96: { description: 'Thunderstorm with hail', icon: 'zap' },
  99: { description: 'Thunderstorm with hail', icon: 'zap' },
};

export function getWeatherDescription(code: number): string {
  return WMO_CODE_MAP[code]?.description || 'Unknown';
}

export function getWeatherIcon(code: number): string {
  return WMO_CODE_MAP[code]?.icon || 'cloud';
}

export function convertTemperature(celsius: number, toUnit: 'metric' | 'imperial'): number {
  if (toUnit === 'imperial') {
    return Math.round((celsius * 9) / 5 + 32);
  }
  return Math.round(celsius);
}

export function convertWindSpeed(ms: number, toUnit: 'metric' | 'imperial'): number {
  if (toUnit === 'imperial') {
    return Math.round(ms * 2.237); // m/s to mph
  }
  return Math.round(ms * 3.6); // m/s to km/h
}
