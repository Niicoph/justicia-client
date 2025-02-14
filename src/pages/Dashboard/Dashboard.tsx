import Header from '../../components/HeaderD/Header';
import Personal from './Personal/Personal';
import Gestor from './Gestor/Gestor';
import { useState } from 'react';

export default function Dashboard() {
  const [tabActive, setTabActive] = useState('chat');
  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll bg-Jbackground animate-fade-in">
      <Header tabActive={tabActive} setTabActive={setTabActive} />
      <main className="flex-1 flex">
        {tabActive === 'chat' ? (
          <section className=""></section>
        ) : tabActive === 'personal' ? (
          <Personal />
        ) : (
          <Gestor />
        )}
      </main>
    </div>
  );
}
