import app from './src/app.js';

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
    console.log(`API: Rodando - PORT: ${PORT}`);
    console.log(`Link de acesso local: http://localhost:${PORT}/`);
});