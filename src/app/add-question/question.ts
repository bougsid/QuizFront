import { Option } from "./Option";
import { Subject } from "./subject";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
export class Question {
  id: number;
  content: string;
  options: Array<Option> = new Array();
  duration : number;
  subject : Subject;
  levet : string;
}
