'use client';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  console.error(`Global error occured: ${error.message}`);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Reset page</button>
    </div>
  );
}
