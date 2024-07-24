import { useRef } from "react";
import useFetch from "../Hooks/useFetch";
import { useHistory } from "react-router";

export default function CreateWord() {
  const days = useFetch("http://localhost:3000/days");
  const history = useHistory();
  function onSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료 되었습니다");
          history.push(`/day/${dayRef.current.value}`);
        }
      }),
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>eng</label>
        <input type="text" placeholder="computer" ref={engRef}></input>
      </div>
      <div className="input_area">
        <input type="text" placeholder="컴퓨터" ref={korRef}></input>
      </div>
      <div className="input_area" ref={dayRef}>
        <select>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              1
            </option>
          ))}
          <option>2</option>
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
