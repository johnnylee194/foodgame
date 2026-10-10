import { useState } from 'react';
import { BottomNav } from './components/layout/BottomNav';
import type { TabType } from './components/layout/BottomNav';

import { DashboardView } from './views/DashboardView';
import { InventoryView } from './views/InventoryView';
import { GameView } from './views/GameView';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  return (
    <div className="min-h-screen bg-cyber-darker flex flex-col items-center">
      <div className="w-full max-w-[480px] bg-cyber-dark min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4 px-4 bg-cyber-darker border-b border-cyber-gray shadow-md">
          <h1 className="text-cyber-cyan text-xl font-bold tracking-widest text-center shadow-neon-cyan">
            美食英雄
          </h1>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-20">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'game' && <GameView />}
          {activeTab === 'inventory' && <InventoryView />}
        </main>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
