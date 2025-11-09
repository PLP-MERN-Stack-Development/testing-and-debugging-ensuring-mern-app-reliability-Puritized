import React from 'react';

export default function UserGreeting({ name }) {
  if (!name) return <span data-testid="guest">Hello, Guest</span>;
  return <span data-testid="greet">Hello, {name}</span>;
}