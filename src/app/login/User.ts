import { Quiz } from "../add-quiz/quiz";
/**
 * Created by bougsid.ayoub on 2/28/2017.
 */

export class User {
  id: string;
  username: string;
  password: string;
  quizzes: Array<Quiz> = new Array<Quiz>();

}
