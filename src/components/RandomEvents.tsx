import React from 'react';
import { RandomEventsSystem } from '../types/game';
import { Calendar, Clock, X, Zap } from 'lucide-react';

interface RandomEventsProps {
  randomEvents: RandomEventsSystem;
  onClose: () => void;
}

export const RandomEvents: React.FC<RandomEventsProps> = ({ randomEvents, onClose }) => {
  const formatTimeRemaining = (endTime: Date): string => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();
    
    if (diff <= 0) return 'Ended';
    
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${minutes}m ${seconds}s`;
  };

  const formatNextEventTime = (nextTime: Date): string => {
    const now = new Date();
    const diff = nextTime.getTime() - now.getTime();
    
    if (diff <= 0) return 'Starting soon...';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const eventDescriptions = {
    planting_season: 'Plants in the Garden of Growth grow 5x faster during this event.',
    meteor_shower: 'A cosmic phenomenon increases all your stats by 50%.',
    mining_frenzy: 'Gem mining yields 7x more gems and shiny gems are 3x more likely.',
    relics_rundown: 'Ancient relics are available at half their usual price.',
    market_shutdown: 'All shops are temporarily closed due to market regulations.',
    sneaky_merchant: 'A mysterious merchant offers fragment trades for only 1 fragment!',
    treble: 'Magical energies triple your health, attack, and defense!'
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900 p-4 sm:p-6 rounded-lg border border-purple-500/50 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            <div>
              <h2 className="text-white font-bold text-lg sm:text-xl">Random Events</h2>
              <p className="text-purple-300 text-sm">Special events that affect gameplay</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Event */}
        <div className="mb-6">
          <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-green-400" />
            Current Event
          </h3>
          
          {randomEvents.currentEvent ? (
            <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 p-4 rounded-lg border border-green-500/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{randomEvents.currentEvent.icon}</span>
                <div>
                  <h4 className="text-green-400 font-bold text-lg">{randomEvents.currentEvent.name}</h4>
                  <p className="text-white text-sm">{randomEvents.currentEvent.description}</p>
                </div>
              </div>
              
              <div className="bg-black/30 p-3 rounded-lg">
                <p className="text-gray-300 text-sm mb-2">
                  {eventDescriptions[randomEvents.currentEvent.type as keyof typeof eventDescriptions]}
                </p>
                <div className="flex items-center gap-2 text-green-300">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">
                    Time remaining: {formatTimeRemaining(randomEvents.currentEvent.endTime)}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/50 text-center">
              <p className="text-gray-400">No event currently active</p>
            </div>
          )}
        </div>

        {/* Next Event */}
        <div className="mb-6">
          <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-400" />
            Next Event
          </h3>
          
          <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-4 rounded-lg border border-blue-500/50">
            <div className="text-center">
              <p className="text-blue-300 text-lg font-semibold mb-2">
                Next event starts in: {formatNextEventTime(randomEvents.nextEventTime)}
              </p>
              <p className="text-gray-300 text-sm">
                Exact time: {randomEvents.nextEventTime.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Event Information */}
        <div className="bg-black/30 p-4 rounded-lg">
          <h3 className="text-white font-bold text-lg mb-3">Event Information</h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-green-900/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🌱</span>
                  <span className="text-green-400 font-semibold">Planting Season</span>
                </div>
                <p className="text-xs">Plants grow 5x faster</p>
              </div>
              
              <div className="bg-purple-900/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">☄️</span>
                  <span className="text-purple-400 font-semibold">Meteor Shower</span>
                </div>
                <p className="text-xs">+50% to all stats</p>
              </div>
              
              <div className="bg-yellow-900/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⛏️</span>
                  <span className="text-yellow-400 font-semibold">Mining Frenzy</span>
                </div>
                <p className="text-xs">7x gems, 3x shiny chance</p>
              </div>
              
              <div className="bg-indigo-900/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🏺</span>
                  <span className="text-indigo-400 font-semibold">Relics Rundown</span>
                </div>
                <p className="text-xs">Relics cost 50% less</p>
              </div>
              
              <div className="bg-red-900/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🚫</span>
                  <span className="text-red-400 font-semibold">Market Shutdown</span>
                </div>
                <p className="text-xs">Shop is disabled</p>
              </div>
              
              <div className="bg-orange-900/30 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🥷</span>
                  <span className="text-orange-400 font-semibold">Sneaky Merchant</span>
                </div>
                <p className="text-xs">Trades cost 1 fragment</p>
              </div>
            </div>
            
            <div className="bg-cyan-900/30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💪</span>
                <span className="text-cyan-400 font-semibold">Treble</span>
              </div>
              <p className="text-xs">Health, attack, and defense tripled</p>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-purple-900/30 rounded-lg">
            <p className="text-purple-300 text-sm font-semibold mb-1">Event Schedule:</p>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• Each event lasts exactly 15 minutes</li>
              <li>• Time between events: up to 2 hours</li>
              <li>• Events are randomly selected</li>
              <li>• Effects are applied automatically</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};