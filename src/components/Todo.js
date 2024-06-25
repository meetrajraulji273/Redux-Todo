import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useDispatch } from "react-redux";
import { deleteItem, editItem, markAsDone } from "../features/todo/todoSlice";

export default function Todo({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="Todo" key={item.id}>
      <p
        onClick={() => dispatch(markAsDone(item.id))}
        className={`${item.isDone ? "completed" : ""}`}
      >
        {item.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => dispatch(editItem(item.id))}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            dispatch(deleteItem(item.id));
          }}
        />
      </div>
    </div>
  );
}
