export interface WeatherData {
  temperature: number;
  temperatureUnit: string;
  humidity: number;
  windSpeed: number;
  windSpeedUnit: string;
  weatherCode: number;
  isDay: boolean;
  time: string;
  timezone: string;
}

export interface WeatherError {
  message: string;
  code?: string;
}

export interface LocationCoords {
  latitude: number;
  longitude: number;
}

export interface WeatherWidgetProps {
  latitude: number;
  longitude: number;
  className?: string;
  showTime?: boolean;
  showWeather?: boolean;
  units?: 'metric' | 'imperial';
  refreshInterval?: number;
}

export interface TimeDisplayProps {
  className?: string;
  format?: string;
  timezone?: string;
}
