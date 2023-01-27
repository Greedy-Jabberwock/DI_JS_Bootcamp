import db from "../config/pgdb.js";

export const getTasks = () => {
    const tasks = db('tasks').select('id', 'task')
    return tasks;
}

export const addTask = (task) => {
    return db('tasks')
    .insert({task})
}

export const removeTask = (id) => {
    return db('tasks')
    .where('id', id)
    .del(['id', 'task'])
}