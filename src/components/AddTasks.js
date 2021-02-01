import { useState } from "react";

const AddTasks = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please Add Task");
    }
    onAdd({ title, description, reminder }); 
    setDescription("");
    setTitle("");
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title </label>
        <input
          type="text"
          value={title}
          placeholder="Add Task"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label> Description </label>
        <input
          type="text"
          value={description}
          placeholder="Add Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label> Set Reminder </label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTasks;
