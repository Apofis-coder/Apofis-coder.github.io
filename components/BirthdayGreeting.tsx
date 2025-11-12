
import React from 'react';

interface BirthdayGreetingProps {
  onNext: () => void;
}

const Balloon: React.FC<{ style: React.CSSProperties, className: string }> = ({ style, className }) => (
    <div
        className={`absolute bottom-[-100px] w-16 h-20 rounded-full animate-float-up ${className}`}
        style={style}
    >
      <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-2 h-4 bg-inherit rounded-sm"></div>
    </div>
);

const Firework: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute w-2 h-2 rounded-full animate-burst"
    style={style}
  ></div>
);

const BirthdayCake: React.FC = () => (
    <div className="my-8 relative w-56 h-56">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            {/* Flames */}
            <g>
                <path d="M 50 40 Q 52.5 35 55 40 Q 52.5 45 50 40" fill="#f59e0b" className="animate-flicker" style={{ animationDelay: '0.1s' }}/>
                <path d="M 60 35 Q 62.5 30 65 35 Q 62.5 40 60 35" fill="#f59e0b" className="animate-flicker" />
                <path d="M 70 40 Q 72.5 35 75 40 Q 72.5 45 70 40" fill="#f59e0b" className="animate-flicker" style={{ animationDelay: '0.2s' }} />
            </g>
            {/* Candles */}
            <g>
                <rect x="52" y="45" width="3" height="12" fill="#e2e8f0" />
                <rect x="61" y="40" width="3" height="17" fill="#e2e8f0" />
                <rect x="71" y="45" width="3" height="12" fill="#e2e8f0" />
            </g>
            
            {/* Top Tier Icing */}
            <path d="M30,57 C35,65 45,65 50,57 C55,65 65,65 70,57 C75,65 85,65 90,57 L90,60 L30,60 Z" fill="#64748b" />
            {/* Top Tier Cake */}
            <rect x="30" y="60" width="60" height="20" rx="2" fill="#0ea5e9" />

            {/* Bottom Tier Icing */}
            <path d="M20,80 C28,90 40,90 48,80 C56,90 64,90 72,80 C80,90 92,90 100,80 L100,85 L20,85 Z" fill="#475569" />
            {/* Bottom Tier Cake */}
            <rect x="20" y="85" width="80" height="20" rx="2" fill="#0891b2" />
            
            {/* Plate */}
            <rect x="10" y="105" width="100" height="5" rx="2.5" fill="#94a3b8" />
        </svg>
    </div>
);


const BirthdayGreeting: React.FC<BirthdayGreetingProps> = ({ onNext }) => {
    const balloonCount = 20;
    const fireworkCount = 25;

    const renderBalloons = () => {
        const balloons = [];
        const colors = ['bg-cyan-500', 'bg-teal-500', 'bg-slate-600', 'bg-amber-400', 'bg-sky-500'];
        for (let i = 0; i < balloonCount; i++) {
            const colorClass = colors[i % colors.length];
            const style: React.CSSProperties = {
                left: `${Math.random() * 95}%`,
                animationDuration: `${Math.random() * 10 + 8}s`,
                animationDelay: `${Math.random() * 5}s`,
            };
            balloons.push(<Balloon key={`balloon-${i}`} style={style} className={colorClass} />);
        }
        return balloons;
    };
    
    const renderFireworks = () => {
        const fireworks = [];
        const colors = ['#06b6d4', '#14b8a6', '#f59e0b', '#64748b', '#0ea5e9']; // cian, teal, ambar, slate, sky
        for (let i = 0; i < fireworkCount; i++) {
            const color = colors[i % colors.length];
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 80}%`,
                animationDelay: `${Math.random() * 4}s`,
                backgroundColor: color,
                boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`
            };
            fireworks.push(<Firework key={`firework-${i}`} style={style} />);
        }
        return fireworks;
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden relative bg-gradient-to-b from-slate-900 to-stone-950">
            {renderBalloons()}
            {renderFireworks()}
            <div className="z-10 text-center flex flex-col items-center">
                <h1 className="font-pacifico text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_5px_15px_rgba(255,255,255,0.4)]">
                    ¡Feliz Cumpleaños!
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-slate-300">Te deseamos lo mejor en tu día</p>
                <BirthdayCake />
                <button
                    onClick={onNext}
                    className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-400"
                >
                    Ver mis Recuerdos
                </button>
            </div>
        </div>
    );
};

export default BirthdayGreeting;
