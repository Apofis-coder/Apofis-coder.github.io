
import React, { useState } from 'react';
import BirthdayGreeting from './components/BirthdayGreeting';
import PhotoGallery from './components/PhotoGallery';
import VideoPage from './components/VideoPage';

type View = 'greeting' | 'gallery' | 'video';

const App: React.FC = () => {
    const [view, setView] = useState<View>('greeting');

    const showGreeting = () => setView('greeting');
    const showGallery = () => setView('gallery');
    const showVideo = () => setView('video');


    return (
        <div className="bg-stone-950 min-h-screen text-white">
            {view === 'greeting' && <BirthdayGreeting onNext={showGallery} />}
            {view === 'gallery' && <PhotoGallery onBack={showGreeting} onNext={showVideo} />}
            {view === 'video' && <VideoPage onBack={showGallery} />}
        </div>
    );
};

export default App;
