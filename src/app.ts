import express, {NextFunction, Request, Response} from "express";

const app = express();

const PORT = process.env.PORT || 3500;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {

    return res.redirect('https://google.com')
    
})

//custom middleware
const middleware = ({name}: {name: String}) => (req: Request, res: Response, next: NextFunction) => {

    const myName = name;

    }

app.post('/api/data', (req: Request, res: Response) => {
    console.log(req.body);

    return res.status(200).json({"data": req.body.firstname})
})



app.all('*', (req: Request, res: Response) => {
    return res.status(404).send("Endpoints resource not found!")
})
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})