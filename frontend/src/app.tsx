import QCScheduler from './components/QCScheduler.tsx';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Quality Control Audit Tool</h1>
      <QCScheduler />
      {/* Additional modules go here */}
    </div>
  );
  console.log("Frontend loaded");
}