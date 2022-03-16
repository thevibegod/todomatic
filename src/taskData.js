import { nanoid } from "nanoid";

const TASKS = [
  { id: nanoid(), text: "Eat", completed: true },
  { id: nanoid(), text: "Sleep", completed: false },
  { id: nanoid(), text: "Repeat", completed: false }
];

export default TASKS;