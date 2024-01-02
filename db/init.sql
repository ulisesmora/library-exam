SELECT 'CREATE DATABASE gpt'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'gpt')\gexec