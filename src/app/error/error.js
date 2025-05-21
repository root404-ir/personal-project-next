'use client';

import React from 'react';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>یک خطا رخ داده!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>تلاش مجدد</button>
    </div>
  );
}
