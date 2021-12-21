import {Request, Response} from 'express';
import {getUserUseCase} from "@useCases";

class Controller {
  async list(req: Request, res: Response) {
    res.json({message: 'Get users'})
  }

  async get(req: Request, res: Response) {
    const user = await getUserUseCase.getUser(req.params.id)
    res.json(user);
  }

  async create(req: Request, res: Response) {
    res.json({message: 'Create user'})
  }

  async update(req: Request, res: Response) {
    res.json({message: 'Update user'})
  }

  async delete(req: Request, res: Response) {
    res.json({message: 'Delete user'})
  }
}

const controller = new Controller();

export default controller;