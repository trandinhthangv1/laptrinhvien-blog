import express, { Request, Response } from 'express';
import config from '@config/index';

const main = (): void => {
  const app = express();

  app.get('/', (req: Request, res: Response) => {
    res.json(config);
  });

  app.listen(process.env.PORT || 8000, () => {
    console.log('server is listening at http://localhost:8000');
  });
};

main();
