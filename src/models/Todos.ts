import sequelize = require('sequelize');
import { db } from '../instances/pg';

export interface TodosInstance extends sequelize.Model {
  id: number;
  title: string;
  done: boolean;
}

export const Todo = db.define<TodosInstance>(
  'Todo',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: sequelize.DataTypes.INTEGER,
    },
    title: {
      type: sequelize.DataTypes.STRING,
    },
    done: {
      type: sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'todos',
    timestamps: false,
  }
);
