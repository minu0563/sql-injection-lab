'use client';

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState<string | null>(null);

  const summit = async () => {
    setError(null);

    const res = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, age }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(
        data.sqlMessage ||
        data.error ||
        'unknown error'
      );
      return;
    }

    alert('ok');
  };

  return (
    <div className="pd-20">
      <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>

      <br /><br />

      <input placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>

      <br /><br />

      <button onClick={summit}>send</button>

      <br /><br />

      {error && (
        <pre style={{ color: 'red', whiteSpace: 'pre-wrap'}}>
          {error}
        </pre>
      )}
    </div>
  );
}