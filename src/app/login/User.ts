import {QuizUserAssociation} from "../information/QuizUserAssociation";
/**
 * Created by bougsid.ayoub on 2/28/2017.
 */

export class User {
  id: number;
  username: string;
  password: string;
  quizzes: Array<QuizUserAssociation> = new Array<QuizUserAssociation>();

}
