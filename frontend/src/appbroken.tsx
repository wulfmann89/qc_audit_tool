import { useEffect } from 'react';

throw new Error("🧨 Forced crash to confirm rebuild");

export default function App() {
  useEffect(() => {
    console.log("✅ App.tsx is rendering");
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>TESTING — NOTHING ELSE SHOULD SHOW</h1>
    </div>
  );
}