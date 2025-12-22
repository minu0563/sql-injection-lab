'use client';

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const summit = async () => {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, age }),
    });

    alert('ok');
  };

  return (
    <div className="pd-20">
      <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>

      <br /><br />

      <input placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>

      <br /><br />

      <button onClick={summit}>send</button>
    </div>
  );
}