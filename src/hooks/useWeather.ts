import { useState, useEffect } from 'react';
import { WeatherData, LocationCoords, WeatherError } from '../types';

const OPEN_METEO_API = 'https://api.open-meteo.com/v1/forecast';

export function useWeather(coords: LocationCoords, refreshInterval: number = 600000) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<WeatherError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({
          latitude: coords.latitude.toString(),
          longitude: coords.longitude.toString(),
          current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,is_day,time,timezone',
          temperature_unit: 'celsius',
          wind_speed_unit: 'ms',
          timezone: 'auto',
        });

        const response = await fetch(`${OPEN_METEO_API}?${params}`);

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();

        if (data.current) {
          setWeather({
            temperature: data.current.temperature_2m,
            temperatureUnit: '°C',
            humidity: data.current.relative_humidity_2m,
            windSpeed: data.current.wind_speed_10m,
            windSpeedUnit: 'm/s',
            weatherCode: data.current.weather_code,
            isDay: data.current.is_day,
            time: data.current.time,
            timezone: data.timezone,
          });
        }
      } catch (err) {
        setError({
          message: err instanceof Error ? err.message : 'Unknown error',
          code: 'FETCH_ERROR',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, refreshInterval);

    return () => clearInterval(interval);
  }, [coords.latitude, coords.longitude, refreshInterval]);

  return { weather, error, loading };
}
