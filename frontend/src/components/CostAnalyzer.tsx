// frontend/src/components/CostAnalyzer.tsx
import { useEffect, useState } from "react";

type CostData = {
  contractRate: number;
  unitCost: number;
  testsPerUnit: number;
  costPerTest: number;
  margin: number;
};

export default function CostAnalyzer() {
  const [data, setData] = useState<CostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/qc/cost")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (loading) return <div>Loading cost data...</div>;
  if (error) return <div>Error loading cost data.</div>;
  if (!data) return <div>No cost data available.</div>;

  const calculatedMargin = data.contractRate - data.costPerTest;

  return (
    <div>
      <h2>Cost Analyzer</h2>
      <p>
        <strong>Contract Rate:</strong> ${data.contractRate.toFixed(2)}
      </p>
      <p>
        <strong>Unit Cost:</strong> ${data.unitCost.toFixed(2)}
      </p>
      <p>
        <strong>Tests per Unit:</strong> {data.testsPerUnit}
      </p>
      <p>
        <strong>Cost per Test:</strong> ${data.costPerTest.toFixed(2)}
      </p>
      <p>
        <strong>Margin:</strong> ${data.margin.toFixed(2)}
      </p>
      <p>
        <strong>Calculated Margin:</strong> ${calculatedMargin.toFixed(2)}
      </p>
    </div>
  );
}
