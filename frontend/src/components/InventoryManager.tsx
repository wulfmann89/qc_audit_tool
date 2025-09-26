// frontend/src/components/InventoryManager.tsx
import { useEffect, useState } from "react";

type InventoryData = {
  item: string;
  stock: number;
  parThreshold: number;
  alert: boolean;
  vendor: string;
};

export default function InventoryManager() {
  const [data, setData] = useState<InventoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/qc/inventory')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
    .catch(() => setError(true))
  }, []);

  if (loading) return <div>Loading inventory... </div>;
  if (error) return <div>Error loading inventory.</div>;
  if (!data) return <div>No inventory data available.</div>;

  return (
    <div>
      <h2>Inventory Manager</h2>
      <p><strong>Item</strong> {data.item}</p>
      <p><strong>Stock Level:</strong> {data.stock}</p>
      <p><strong>Par Threshold</strong> {data.parThreshold}</p>
      <p><strong>Vendor:</strong> {data.vendor}</p>
      {data.alert && (
      <p style={{ color: 'red' }}>
        ⚠️ Stock below threshold - reorder recommended!
      </p>
      )}
    </div>
  );
}