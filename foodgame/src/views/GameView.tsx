import { Lock } from 'lucide-react';

export const GameView = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-cyber-pink/20 blur-xl rounded-full w-32 h-32 mx-auto animate-pulse"></div>
        <div className="relative bg-cyber-darker border-2 border-cyber-pink/50 rounded-full w-32 h-32 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,255,0.3)]">
          <Lock className="w-12 h-12 text-cyber-pink drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]" />
        </div>
      </div>

      <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-pink mb-4 tracking-widest uppercase">
        Coming Soon
      </h2>
      <p className="text-cyber-text/60 font-medium text-lg">
        抽奖大转盘及合成活动正在筹备中<br/>敬请期待...
      </p>
    </div>
  );
};
