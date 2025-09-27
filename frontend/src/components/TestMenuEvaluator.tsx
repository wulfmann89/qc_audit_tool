interface TestScenario {
  id: string;
  name: string;
  cost: number;
  benefitScore: number;
  clinicalValue: string;
}

interface Props {
  scenarios?: TestScenario[];
}

export default function TestMenuEvaluator({ scenarios }: Props) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>🧪 Test Menu Evaluator</h2>

      {scenarios && scenarios.length > 0 ? (
        <ul>
          {scenarios.map((scenario) => (
            <li key={scenario.id} style={{ marginBottom: "1rem" }}>
              <strong>{scenario.name}</strong>
              <br />
              Cost: ${scenario.cost.toFixed(2)}
              <br />
              Benefit Score: {scenario.benefitScore}
              <br />
              Clinical Value: {scenario.clinicalValue}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontStyle: "italic", color: "#666" }}>
          No test scenarios available yet.
        </p>
      )}
    </div>
  );
}
