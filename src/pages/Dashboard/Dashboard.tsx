import Header from '../../components/HeaderD/Header';
import Personal from './Personal/Personal';
import Gestor from './Gestor/Gestor';
import Chat from './Chat/Chat';
import { useState } from 'react';

export default function Dashboard() {
  const [tabActive, setTabActive] = useState('chat');
  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll  bg-white animate-fade-in  lgCustom:bg-slate-100 ">
      <Header tabActive={tabActive} setTabActive={setTabActive} />
      <main className="flex-1 flex lgCustom:p-4 lgCustom:gap-4">
        <Personal className={tabActive === 'personal' ? 'block' : 'hidden'} />
        <Chat className={tabActive === 'chat' ? 'block' : 'hidden'} />
        <Gestor className={tabActive === 'gestor' ? 'block' : 'hidden'} />
      </main>
    </div>
  );
}
