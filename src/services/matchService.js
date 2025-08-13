const API_URL = "http://localhost:8081/api";

export async function getMatches() {
  const response = await fetch(`${API_URL}/matches`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

export async function createMatch(matchData) {
  const response = await fetch(`${API_URL}/matches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(matchData),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

export async function submitMatch(matchData) {
  const response = await fetch(`${API_URL}/matches`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(matchData),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to submit match:");
      return res.json();
    })
    .catch((err) => console.error("Submit error:", err));
}
