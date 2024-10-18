"use client";

import { useState } from "react";

export default function Page() {
  // State for form inputs
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  // State for response and status
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setLoading(true); // Set loading state to true

    try {
      // Send POST request with the form data
      const response = await fetch("/api/products/add", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json', // Fix content type
        },
        body: JSON.stringify({
          name,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const result = await response.json(); // Assuming the API returns JSON data
      setData(result); // Set the response data into state
      setLoading(false); // Turn off loading state
    } catch (err) {
      setError(err.message);
      setLoading(false); // Turn off loading state
    }
  };

  return (
    <div>
      {/* Form for name and password inputs */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Set the name value in state
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Set the password value in state
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Display any error message */}
      {error && <div>Error: {error}</div>}

      {/* Display the response data */}
      {data && (
        <div>
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
