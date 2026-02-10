import app from './app.js';
import 'dotenv/config';

// Cast env variable to number
const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
