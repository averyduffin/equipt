import epress from 'epress';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Backend app listening on port ${PORT}`));
