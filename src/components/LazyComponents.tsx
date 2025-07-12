import { lazy } from 'react';

// Lazy load heavy components that aren't always needed
import { LoadingSpinner } from './LoadingSpinner';

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="text-center">
      <LoadingSpinner size="48" color="#a855f7" className="mb-4" />
      <p className="text-white text-lg font-semibold">Loading...</p>
    </div>
  </div>
);

export const LazyStatistics = lazy(() => import('./Statistics').then(module => ({ default: module.Statistics })));
export const LazyAchievements = lazy(() => import('./Achievements').then(module => ({ default: module.Achievements })));
export const LazyCollectionBook = lazy(() => import('./CollectionBook').then(module => ({ default: module.CollectionBook })));
export const LazyPokyegMarket = lazy(() => import('./PokyegMarket').then(module => ({ default: module.PokyegMarket })));
export const LazyTutorial = lazy(() => import('./Tutorial').then(module => ({ default: module.Tutorial })));
export const LazyCheatPanel = lazy(() => import('./CheatPanel').then(module => ({ default: module.CheatPanel })));
export const LazyDailyRewards = lazy(() => import('./DailyRewards').then(module => ({ default: module.DailyRewards })));
export const LazyOfflineProgress = lazy(() => import('./OfflineProgress').then(module => ({ default: module.OfflineProgress })));
export const LazyBulkActions = lazy(() => import('./BulkActions').then(module => ({ default: module.BulkActions })));
export const LazyHamburgerMenuPage = lazy(() => import('./HamburgerMenuPage').then(module => ({ default: module.HamburgerMenuPage })));
export const LazyGardenOfGrowth = lazy(() => import('./GardenOfGrowth').then(module => ({ default: module.GardenOfGrowth })));
export const LazyGameSettings = lazy(() => import('./GameSettings').then(module => ({ default: module.GameSettings })));
export const LazyDevTools = lazy(() => import('./DevTools').then(module => ({ default: module.DevTools })));
export const LazyYojefMarket = lazy(() => import('./YojefMarket').then(module => ({ default: module.YojefMarket })));
export const LazyProgressionPanel = lazy(() => import('./ProgressionPanel').then(module => ({ default: module.ProgressionPanel })));
export const LazyAdventureSkillSelection = lazy(() => import('./AdventureSkillSelection').then(module => ({ default: module.AdventureSkillSelection })));

export { LoadingFallback };