import {Option} from "./Option";
/**
 * Created by bougsid.ayoub on 2/24/2017.
 */
export class Question {
  id: number;
  content: string;
  options: Array<Option> = new Array();
}
