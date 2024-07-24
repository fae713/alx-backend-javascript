import express from 'express';
import router from './routes';

const app = express();
const PORT = 1245;

router(app);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
