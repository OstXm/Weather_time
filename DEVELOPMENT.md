# Mise à jour du README

Voici un guide rapide pour développer et tester ce package.

## Développement local

```bash
# Installation des dépendances
npm install

# Compilation en mode watch
npm run dev

# Build pour la production
npm run build
```

## Utilisation dans un projet Next.js

### 1. Ajouter le package à votre projet local

```bash
npm install file:../Weather_time
```

### 2. Utiliser dans une page ou un composant

```tsx
'use client';

import { WeatherTimeWidget } from 'weather-time-widget';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WeatherTimeWidget
        latitude={48.8566}
        longitude={2.3522}
        className="w-full max-w-sm"
      />
    </main>
  );
}
```

## Publier sur NPM

1. Augmenter la version dans `package.json`
2. Créer un tag git: `git tag v1.0.0`
3. Publier: `npm publish`

## Architecture du package

```
src/
├── types/          # Définitions TypeScript
├── components/     # Composants React
├── hooks/          # Hooks personnalisés
├── utils/          # Fonctions utilitaires
└── index.ts        # Point d'entrée principal
```

## Nouvelles fonctionnalités à venir

- [ ] Support des prévisions météo
- [ ] Localisation i18n
- [ ] Thèmes personnalisés
- [ ] Mode Dark
- [ ] Intégration des alarmes météo
