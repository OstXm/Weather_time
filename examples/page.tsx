'use client';

import { WeatherTimeWidget, useWeather, WeatherDisplay, TimeDisplay } from '../../src';

export default function ExamplePage() {
  // Exemple 1: Widget complet simple
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Weather Time Widget Examples</h1>

        {/* Widget complet - Paris */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Paris, France</h2>
          <WeatherTimeWidget
            latitude={48.8566}
            longitude={2.3522}
            units="metric"
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          />
        </div>

        {/* Widget complet - New York */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">New York, USA</h2>
          <WeatherTimeWidget
            latitude={40.7128}
            longitude={-74.0060}
            units="imperial"
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          />
        </div>

        {/* Widget complet - Londres */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">London, UK</h2>
          <WeatherTimeWidget
            latitude={51.5074}
            longitude={-0.1278}
            units="metric"
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          />
        </div>

        {/* Multiple widgets en grille */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Dashboard View</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <WeatherTimeWidget
              latitude={35.6762}
              longitude={139.6503}
              showTime={true}
              showWeather={true}
              className="bg-white rounded-xl shadow-md"
            />
            <WeatherTimeWidget
              latitude={-33.8688}
              longitude={151.2093}
              showTime={true}
              showWeather={true}
              className="bg-white rounded-xl shadow-md"
            />
            <WeatherTimeWidget
              latitude={31.2304}
              longitude={30.0505}
              showTime={true}
              showWeather={true}
              className="bg-white rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
