import {Question} from "../add-question/question";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
export class Quiz {
  id: number;
  title: string;
  duration: {
    seconds,
    nanos
  } = {
    seconds:0,
    nanos : 0
  };
  questions: Array<Question> = new Array();

}
