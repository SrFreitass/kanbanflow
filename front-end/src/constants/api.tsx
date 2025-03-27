export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8080', // Pega do .env
    HEADERS: {
      'Content-Type': 'application/json',
    },
    ENV: import.meta.env.VITE_ENV || 'development', // Pega o ambiente do .env
  };