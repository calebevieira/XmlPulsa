import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

type Props = {
  onResults: (results: any[]) => void;
};

export default function FileUploader({ onResults }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFiles = (selected: FileList) => {
    setFiles(Array.from(selected));
  };

  const upload = async () => {
    if (!files.length) return;
    const data = new FormData();
    files.forEach((file) => data.append('xml', file));
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:3000/validate', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onResults(res.data.results);
    } catch (err) {
      console.error(err);
      alert('Erro ao validar arquivos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <input
        type="file"
        multiple
        accept=".xml"
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
        className="neon-box p-2 rounded w-full"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={upload}
        className="neon-box px-4 py-2 rounded text-neonGreen"
      >
        Validar Arquivos
      </motion.button>
      {loading && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1 bg-neonPurple w-full"
        />
      )}
    </div>
  );
}
