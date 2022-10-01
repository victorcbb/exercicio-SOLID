import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      this.showUserProfileUseCase.execute({ user_id });

      return response.send(this.showUserProfileUseCase.execute({ user_id }));
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { ShowUserProfileController };
