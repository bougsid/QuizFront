import {Quiz} from "../add-quiz/quiz";
import {User} from "../login/User";
/**
 * Created by bougsid.ayoub on 2/28/2017.
 */
export class QuizUserAssociation {
  quizId:number;
  userId:number;
  mark: number;
  quiz: Quiz;
  user: User;
  startDate: any;
  endDate: any;
  active: boolean;
}
