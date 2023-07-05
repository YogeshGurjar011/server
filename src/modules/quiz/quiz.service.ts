import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
    getAllQuize() : Array<number> {
        return [1,2,3,45];
    }
}
