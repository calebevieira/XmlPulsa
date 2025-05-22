import { useState } from 'react';
import FileUploader from '../components/FileUploader';

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div className="min-h-screen p-4 flex flex-col items-center space-y-4">
      <h1 className="text-3xl text-neonPink font-bold">Validador de Guias TISS - Grupo Pulsa</h1>
      <FileUploader onResults={setResults} />
      <div className="w-full max-w-3xl space-y-2">
        {results.map((r: any) => (
          <div key={r.file} className="neon-box p-4 rounded">
            <p className="font-bold">{r.isValid ? '✅' : '❌'} {r.file}</p>
            {r.errors.length > 0 && (
              <ul className="list-disc ml-5 text-neonPink">
                {r.errors.map((e: string, idx: number) => (
                  <li key={idx}>{e}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
