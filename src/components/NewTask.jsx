import { useState } from "react";

export default function NewTask({ onAdd }) {
  // Needs to have a default value of "" since if nothing it causes a small error. See line 8.
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    // This would start as an undefined value then turn into a define value which causes a warning if the state's default falue is left blank.
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    // This stops blank tasks from being created
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
