'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useSelector } from 'react-redux'
import { Checkbox } from './ui/checkbox'

export function TodoListTable() {
  const todos = useSelector((store) => store.todo)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-12" />
          <TableHead className="w-full text-left">Description</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>
              <Checkbox checked={todo.completed} />
            </TableCell>
            <TableCell
              className={`text-left ${
                todo.completed && 'line-through text-muted-foreground'
              }`}
            >
              {todo.text}
            </TableCell>
            <TableCell
              className={`text-center ${
                todo.completed ? 'text-emerald-600' : 'text-amber-600'
              }`}
            >
              {todo.completed ? 'Completed' : 'Pending'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
