import QCScheduler from './components/QCScheduler.tsx';
import LotTracker from './components/LotTracker.tsx';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    console.log("Frontend loaded");
  }, []);
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Quality Control Audit Tool</h1>
      <QCScheduler />
      <LotTracker />
      <InventoryManager />
      {/* Additional modules go here */}
    </div>
  );
}