import React, { useState } from "react";

interface TestScenario {
  id: string;
  name: string;
  cost: number;
  benefitScore: number;
  clinicalValue: string;
}

interface Props {
  scenarios?: TestScenario[];
  setScenarios?: (scenarios: TestScenario[]) => void;
}

export default function TestMenuEvaluator({ scenarios, setScenarios }: Props) {
  const [form, setFormData] = useState({
    id: "",
    name: "",
    cost: "",
    benefitScore: "",
    clinicalValue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/qc/test-menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        cost: parseFloat(form.cost),
        benefitScore: parseFloat(form.benefitScore),
      }),
    });
  const result = await res.json();
  console.log("Submitted", result);

  fetch("/api/qc/test-menu")
    .then((res) => res.json())
    .then((data) => {
      const transformed: TestScenario[] = data.tests.map(
        (test: { name: string; score: number }, index: number): TestScenario => ({
          id: `TST${index + 1}`,
          name: test.name,
          cost: 0,
          benefitScore: test.score,
          clinicalValue:
            data.decisions?.find(
              (decision: { test: string; note: string }) => decision.test === test.name
            )?.note || '',
        })
      );
      setScenarios?.(transformed);
    });

  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>🧪 Test Menu Evaluator</h2>

      {scenarios && scenarios.length > 0 ? (
        <ul>
          {scenarios.map((scenario) => (
            <li key={scenario.id} style={{ marginBottom: "1rem" }}>
              <strong>{scenario.name}</strong>
              <br />
              ID: ${scenario.id}
              <br />
              Name: ${scenario.name}
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
      <h3>Add a new test scenario</h3>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input name="id" placeholder="ID" onChange={handleChange} />
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="cost" placeholder="Cost" onChange={handleChange} />
        <input
          name="benefitScore"
          placeholder="Benefit Score"
          onChange={handleChange}
        />
        <input
          name="clinicalValue"
          placeholder="Clinical Value"
          onChange={handleChange}
        />
        <button type="submit">Add Scenario</button>
      </form>
    </div>
  );
}
