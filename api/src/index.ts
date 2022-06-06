import 'dotenv/config';
import app from '@config/express';
import mongoDb from '@config/mongo-db';

const PORT = (process.env.PORT as string) || 8000;

mongoDb.connect();

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
