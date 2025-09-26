// frontend/src/components/LotTracker.tsx
import { useEffect, useState } from "react";

type LotData = {
  lotNumber: string;
  manufacturer: string;
  received: string;
  expiry: string;
  used: number;
  wasted: number;
  qcStatus: string;
};

export default function LotTracker() {
  const [data, setData] = useState<LotData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/qc/lot")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (loading) return <div>Loading lot data...</div>;
  if (error) return <div>Error loading lot tracker.</div>;
  if (!data) return <div>No lot data available.</div>;
  
  const total = data.used + data.wasted;
  const usagePercent = total > 0 ? Math.round((data.used / total) * 100) : 0

  const expiryDate = new Date(data.expiry);
  const daysLeft = Math.ceil(
    (expiryDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );
  const usagePercent = Math.round(
    (data.used / (data.used + data.wasted)) * 100,
  );

  return (
    <div>
      <h2>Lot Tracker</h2>
      <p>
        <strong>Lot Number</strong> {data.lotNumber}
      </p>
      <p>
        <strong>Manufacturer</strong> {data.manufacturer}
      </p>
      <p>
        <strong>Received</strong> {data.received}
      </p>
      <p>
        <strong>Expiry</strong> {data.expiry} ({daysLeft} days left)
      </p>
      <p>
        <strong>Used</strong> {data.used}
      </p>
      <p>
        <strong>Wasted</strong> {data.wasted}
      </p>
      <p>
        <strong>Usage Efficiency</strong> {usagePercent}%
      </p>
      <p>
        <strong>QC Status</strong>{" "}
        {data.qcStatus === "Pass" ? "✅ Pass" : "❌ Fail"}
      </p>
    </div>
  );
}
