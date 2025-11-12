
import React, { useState, useEffect, useRef } from 'react';

interface VideoPageProps {
    onBack: () => void;
}

const VideoPage: React.FC<VideoPageProps> = ({ onBack }) => {
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (videoSrc) {
                URL.revokeObjectURL(videoSrc);
            }
            const url = URL.createObjectURL(file);
            setVideoSrc(url);
        }
    };

    useEffect(() => {
        return () => {
            if (videoSrc) {
                URL.revokeObjectURL(videoSrc);
            }
        };
    }, [videoSrc]);

    return (
        <div className="min-h-screen w-full p-4 md:p-8 flex flex-col items-center justify-center bg-stone-950 text-white overflow-x-hidden">
            <button
                onClick={onBack}
                className="absolute top-4 left-4 z-20 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full shadow-lg hover:bg-slate-700/60 transform transition-all duration-300"
            >
                &larr; Volver a los recuerdos
            </button>
            
            <div className="w-full max-w-3xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                    Un Video Para Ti
                </h2>
                <p className="mt-2 mb-8 text-slate-300">Sube un video para completar la sorpresa final.</p>

                {videoSrc ? (
                    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                        <video src={videoSrc} controls className="w-full h-full">
                            Tu navegador no soporta el tag de video.
                        </video>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64 border-2 border-dashed border-slate-700 rounded-lg bg-slate-900/50">
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-400"
                        >
                            Subir Video
                        </button>
                        <input
                            type="file"
                            accept="video/*"
                            ref={fileInputRef}
                            onChange={handleVideoUpload}
                            className="hidden"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoPage;
