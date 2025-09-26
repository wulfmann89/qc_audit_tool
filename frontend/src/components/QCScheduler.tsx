import {useEffect, useState } from 'react';

type ScheduleData = {
  tasks: string[];
  overdue: string[];
  signedOff: string[];
};

export default function QCScheduler() {
  const [data, setData] = useState<ScheduleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/qc/schedule')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (loading) return <div>Loading QC tasks...</div>;
  if (error) return <div>Error loading schedule.</div>;

  return (
    <div>
      <h2>QC Scheduler</h2>
      <ul>
        {data?.tasks.map((task) => (
          <li key={task}>
            {task}
            {(data.overdue ?? []).includes(task) && <span style={{ color: 'red' }}> Overdue</span>}
            {(data.signedOff ?? []).includes(task) && <span style={{ color: 'green' }}> Signed Off</span>}
          </li>
          ))}
      </ul>
    </div>
  );
}