import { Question } from "../add-question/question";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
export class Quiz {
  id: number;
  title: string;
  duration: number;
  questions: Array<Question> = new Array();
  score: number;
  active: boolean;
}
