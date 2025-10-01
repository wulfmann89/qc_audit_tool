import QCScheduler from "./components/QCScheduler.tsx";
import LotTracker from "./components/LotTracker.tsx";
import InventoryManager from "./components/InventoryManager.tsx";
import CostAnalyzer from "./components/CostAnalyzer.tsx";
import TestMenuEvaluator from "./components/TestMenuEvaluator.tsx";
import mockScenarios from "./test/mockScenarios.ts";
import type { TestScenario } from "./types/TestScenario.ts";
import { useEffect, useState } from "react";

export default function App() {
  const useMock = true;
  const [scenarios, setScenarios] = useState<TestScenario[]>([]);

  useEffect(() => {
    console.log("Frontend loaded");
    if (useMock) {
      setScenarios(mockScenarios);
    } else {
      fetch("/api/qc/test-menu")
        .then((res) => res.json())
        .then((data) => {
          const transformed: TestScenario[] = data.tests.map(
            (test: { name: string; score: number }, index: number) => ({
              id: `TST${index + 1}`,
              name: test.name,
              cost: 0, // placeholder until backend adds cost
              benefitScore: test.score,
              clinicalValue:
                data.decisions?.find(
                  (d: { test: string; action: string; note: string }) =>
                    d.test === test.name,
                )?.note || "",
            }),
          );
          setScenarios(transformed);
        })

        .catch((err) => {
          console.error("Failed to load test scenarios:", err);
          setScenarios(mockScenarios); // fallback
        });
    }
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Quality Control Audit Tool</h1>
      <QCScheduler />
      <LotTracker />
      <InventoryManager />
      <CostAnalyzer />
      <TestMenuEvaluator scenarios={scenarios} setScenarios={setScenarios} />
      {/* Additional modules go here */}
    </div>
  );
}
