"use client";

import { useState } from "react";

type GiftRow = {
  id: number;
  name: string;
  giftIdea: string;
  budget: string;
  spent: string;
  purchased: boolean;
  hidingSpot: string;
  notes: string;
};

export default function Home() {
  const [rows, setRows] = useState<GiftRow[]>([
    {
      id: 1,
      name: "",
      giftIdea: "",
      budget: "",
      spent: "",
      purchased: false,
      hidingSpot: "",
      notes: "",
    },
  ]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        giftIdea: "",
        budget: "",
        spent: "",
        purchased: false,
        hidingSpot: "",
        notes: "",
      },
    ]);
  };

  const updateRow = (id: number, field: keyof GiftRow, value: string | boolean) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const totalBudget = rows.reduce(
    (sum, row) => sum + (parseFloat(row.budget) || 0),
    0
  );
  const totalSpent = rows.reduce(
    (sum, row) => sum + (parseFloat(row.spent) || 0),
    0
  );

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
        🎄 Christmas Gift Tracker
      </h1>
      <p style={{ marginBottom: "1.5rem", color: "#555" }}>
        Keep track of who you&apos;re shopping for, what they want, and where you hid it.
      </p>

      <div
        style={{
          marginBottom: "1rem",
          padding: "0.75rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ddd",
          background: "#fafafa",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <strong>Total Budget:</strong> ${totalBudget.toFixed(2)}
        </div>
        <div>
          <strong>Total Spent:</strong> ${totalSpent.toFixed(2)}
        </div>
        <div>
          <strong>Remaining:</strong> ${(totalBudget - totalSpent).toFixed(2)}
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "1rem",
            minWidth: "900px",
          }}
        >
          <thead>
            <tr>
              <th style={th}>Name</th>
              <th style={th}>Gift Idea</th>
              <th style={th}>Budget $</th>
              <th style={th}>Spent $</th>
              <th style={th}>Bought?</th>
              <th style={th}>Hiding Spot</th>
              <th style={th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td style={td}>
                  <input
                    style={input}
                    value={row.name}
                    onChange={(e) => updateRow(row.id, "name", e.target.value)}
                    placeholder="Person's name"
                  />
                </td>
                <td style={td}>
                  <input
                    style={input}
                    value={row.giftIdea}
                    onChange={(e) =>
                      updateRow(row.id, "giftIdea", e.target.value)
                    }
                    placeholder="Gift idea"
                  />
                </td>
                <td style={td}>
                  <input
                    style={input}
                    type="number"
                    value={row.budget}
                    onChange={(e) =>
                      updateRow(row.id, "budget", e.target.value)
                    }
                    placeholder="0"
                  />
                </td>
                <td style={td}>
                  <input
                    style={input}
                    type="number"
                    value={row.spent}
                    onChange={(e) => updateRow(row.id, "spent", e.target.value)}
                    placeholder="0"
                  />
                </td>
                <td style={tdCenter}>
                  <input
                    type="checkbox"
                    checked={row.purchased}
                    onChange={(e) =>
                      updateRow(row.id, "purchased", e.target.checked)
                    }
                  />
                </td>
                <td style={td}>
                  <input
                    style={input}
                    value={row.hidingSpot}
                    onChange={(e) =>
                      updateRow(row.id, "hidingSpot", e.target.value)
                    }
                    placeholder="Closet / attic / etc."
                  />
                </td>
                <td style={td}>
                  <input
                    style={input}
                    value={row.notes}
                    onChange={(e) => updateRow(row.id, "notes", e.target.value)}
                    placeholder="Size, color, links…"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        onClick={addRow}
        style={{
          padding: "0.6rem 1.2rem",
          borderRadius: "999px",
          border: "none",
          background: "#111827",
          color: "white",
          cursor: "pointer",
          fontSize: "0.95rem",
        }}
      >
        + Add Person / Gift
      </button>
    </main>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "0.5rem",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "0.85rem",
  whiteSpace: "nowrap",
  background: "#f9fafb",
};

const td: React.CSSProperties = {
  padding: "0.4rem",
  borderBottom: "1px solid #f3f4f6",
};

const tdCenter: React.CSSProperties = {
  ...td,
  textAlign: "center",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "0.3rem 0.4rem",
  borderRadius: "0.35rem",
  border: "1px solid #d1d5db",
  fontSize: "0.85rem",
};
