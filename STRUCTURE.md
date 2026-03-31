# 📦 Weather Time Widget - Package Structure

Voici la structure complète du package créé:

```
Weather_time/
├── src/
│   ├── types/
│   │   └── index.ts                  # Définitions TypeScript
│   ├── hooks/
│   │   ├── useWeather.ts            # Hook pour les données météo
│   │   ├── useTime.ts                # Hook pour l'heure actuelle
│   │   └── index.ts
│   ├── components/
│   │   ├── WeatherDisplay.tsx       # Composant d'affichage météo
│   │   ├── TimeDisplay.tsx           # Composant d'affichage de l'heure
│   │   ├── WeatherTimeWidget.tsx    # Widget complet
│   │   └── index.ts
│   ├── utils/
│   │   └── weatherUtils.ts           # Utilitaires (conversion, codes WMO)
│   └── index.ts                      # Point d'entrée principal
├── examples/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── page.tsx                 # Exemples d'utilisation
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── eslint.config.js
├── package.json                     # Dépendances du package
├── tsconfig.json                    # Config TypeScript
├── README.md                        # Documentation complète
├── QUICKSTART.md                    # Guide de démarrage rapide
├── DEVELOPMENT.md                   # Guide de développement
├── .gitignore
└── dist/                            # Dossier de build (après npm run build)
```

## 🎯 Fichiers clés

### `package.json`
- Configuration npm du package
- Dépendances: `date-fns`, `lucide-react`
- PeerDependencies: `react >= 18.0.0`, `next >= 13.0.0`
- Scripts: `build`, `dev`, `lint`

### `src/index.ts`
Point d'entrée principal qui exporte tous les composants, hooks et utilitaires.

### `src/types/index.ts`
- `WeatherData` - Structure des données météorologiques
- `WeatherError` - Structure des erreurs
- `LocationCoords` - Coordonnées GPS
- `WeatherWidgetProps` - Props du widget principal

### `src/hooks/useWeather.ts`
Hook React qui:
- Récupère les données de l'API Open-Meteo
- Gère le chargement et les erreurs
- Propose une mise à jour automatique (configurable)

### `src/hooks/useTime.ts`
Hook React qui:
- Retourne l'heure actuelle
- Met à jour chaque seconde
- Support des fuseaux horaires

### `src/components/WeatherDisplay.tsx`
Composant affichant:
- Température
- Icône météo
- Humidité
- Vitesse du vent

### `src/components/TimeDisplay.tsx`
Composant affichant:
- L'heure actualisée en temps réel
- Format 12h ou 24h
- Date optionnelle

### `src/components/WeatherTimeWidget.tsx`
Widget complet combinant les deux composants avec:
- Gestion du chargement
- Gestion des erreurs
- Personnalisation des unités

## 🚀 Comment utiliser ce package

### 1. **Compiler le package**

```bash
cd Weather_time
npm install
npm run build
```

Cela crée un dossier `dist/` avec les fichiers compilés.

### 2. **Utiliser dans un projet Next.js**

#### Option A: Installer localement (développement)
```bash
cd votre-projet-next.js
npm install file:../Weather_time
```

#### Option B: Publier sur NPM
```bash
npm login
npm publish
```

### 3. **Importer dans votre projet**

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

## 🎨 Caractéristiques

✅ **Entièrement typé** - Support TypeScript complet
✅ **Sans API key** - Utilise Open-Meteo gratuit
✅ **Composable** - Utilisez les composants ou les hooks séparément
✅ **Responsive** - Fonctionne sur tous les appareils
✅ **Flexible** - Personnalisable en CSS
✅ **Performant** - Mise en cache des données

## 📦 Dépendances

- **react** - Composants React
- **next** - Framework Next.js
- **date-fns** - Utilitaires de date
- **lucide-react** - Icônes SVG

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev          # Mode watch TypeScript

# Production
npm run build        # Compiler pour la distribution

# Tests (à ajouter)
npm run test        # Exécuter les tests

# Linting
npm run lint        # Vérifier la qualité du code
```

## 📚 Documentation

- **README.md** - Documentation complète avec exemples
- **QUICKSTART.md** - Guide de démarrage rapide
- **DEVELOPMENT.md** - Guide de développement

## 🎓 Prochaines étapes

1. ✅ Compiler: `npm run build`
2. ✅ Tester dans un projet Next.js
3. ⏳ Ajouter des tests unitaires
4. ⏳ Ajouter des prévisions météo (optionnel)
5. ⏳ Publier sur NPM

## 💡 Cas d'usage

- 🌍 Afficher la météo actuelle sur une page d'accueil
- 🏠 Widget pour un dashboard personnel
- 📱 App météo légère
- 📊 Widget pour un système d'information
- 🎯 Composant réutilisable pour plusieurs projets

## 🤝 Support

Pour des questions ou des améliorations, consultez la documentation ou explorez les fichiers source dans `src/`.

Bon développement! 🚀
