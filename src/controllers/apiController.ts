import express = require('express');
import { Todo } from '../models/Todos';

export const tasks = async (req: express.Request, res: express.Response) => {
  const { title, done } = req.body;
  const newTodo = await Todo.create({
    title,
    done,
  });
  res.status(201);
  res.json({ id: newTodo });
};

export const seeTasks = async (req: express.Request, res: express.Response) => {
  const list = await Todo.findAll();
  res.json({
    list,
  });
};

export const getTask = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);

  todo
    ? res.json({
        todo,
      })
    : res.json({
        error: 'tarefa não encontrada',
      });
};

export const markTrue = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { done } = req.body;

  const finishing = await Todo.findByPk(id);

  if (finishing) {
    finishing.done = done;
    await finishing.save();
    res.json({
      finishing,
    });
  } else {
    res.json({
      error: 'Tarefa não encontrada',
    });
  }
};

export const updateTodo = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { title, done } = req.body;

  const finishing = await Todo.findByPk(id);

  if (finishing) {
    finishing.done = done;
    finishing.title = title;
    await finishing.save();
    res.json({
      finishing,
    });
  } else {
    res.json({
      error: 'Tarefa não encontrada',
    });
  }
};

export const deleteTodo = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;

  await Todo.destroy({
    where: { id },
  });

  res.json({});
};
