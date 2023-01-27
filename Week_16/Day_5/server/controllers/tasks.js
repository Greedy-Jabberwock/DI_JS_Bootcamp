import { getTasks, addTask, removeTask } from "../modules/tasks.js";

export const _getTasks = async (req, res) => {
    try {
        const data = await getTasks();
        res.send(data)
    } catch (error) {
        console.error(error);
    }
}

export const _addTask = async (req, res) => {
    try {
        await addTask(req.body.task);
        res.send(`Task '${req.body.task}' added to database`);
    } catch (error) {
        res.send('Error with adding task');
    }
}

export const _removeTask = async (req, res) => {
    try {
        await removeTask(req.body.id);
        res.send(`Task was removed`);
    } catch (err) {
        res.send('Error with removing task');
    }
}