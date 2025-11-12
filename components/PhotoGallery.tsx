
import React from 'react';

interface PhotoGalleryProps {
    onBack: () => void;
    onNext: () => void;
}

const photos = Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/${i + 1}/400/600`);

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onBack, onNext }) => {
    const carouselRadius = 288; // Corresponds to translate-z-72 (18rem * 16px)
    const angleStep = 360 / photos.length;

    return (
        <div className="min-h-screen w-full p-4 md:p-8 flex flex-col items-center justify-center bg-stone-950 text-white overflow-x-hidden">
            <button
                onClick={onBack}
                className="absolute top-4 left-4 z-20 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-slate-700/60 transform transition-all duration-300"
            >
                &larr; Volver
            </button>

            <div className="w-full flex flex-col items-center space-y-12">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                        ¡Feliz Cumpleaños!
                    </h2>
                    <p className="mt-2 text-slate-300">Un carrusel de recuerdos especiales.</p>
                </div>
                
                <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center" style={{ perspective: '1200px' }}>
                    <div className="relative w-48 h-72 animate-rotate-y" style={{ transformStyle: 'preserve-3d' }}>
                        {photos.map((photo, index) => (
                            <div
                                key={index}
                                className="absolute w-full h-full"
                                style={{
                                    transform: `rotateY(${index * angleStep}deg) translateZ(${carouselRadius}px)`,
                                }}
                            >
                                <img
                                    src={photo}
                                    alt={`Recuerdo ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl shadow-2xl shadow-black/50"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button
                        onClick={onNext}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-400"
                    >
                        Y hay más... &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
