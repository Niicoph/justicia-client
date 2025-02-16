import Header from '../../components/HeaderD/Header';
import Personal from './Personal/Personal';
import Gestor from './Gestor/Gestor';
import Chat from './Chat/Chat';
import { useState } from 'react';

export default function Dashboard() {
  const [tabActive, setTabActive] = useState('chat');
  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll bg-Jbackground animate-fade-in  lgCustom:gap-2">
      <Header tabActive={tabActive} setTabActive={setTabActive} />
      <main className="flex-1 flex lgCustom:p-4 border border-red-500">
        <Personal className={tabActive === 'personal' ? 'block' : 'hidden'} />
        <Chat className={tabActive === 'chat' ? 'block' : 'hidden'} />
        <Gestor className={tabActive === 'gestor' ? 'block' : 'hidden'} />
      </main>
    </div>
  );
}
