import {Request, Response, Router} from "express";

let router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('HI API')
})

export = router;