import { useParams } from "react-router-dom";

import Word from "./Word";
import useFetch from "../Hooks/useFetch";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3000/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
