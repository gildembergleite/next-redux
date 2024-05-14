'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { remove, useAppSelector } from '@/store'
import { TrashIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'

export function TodoListTable() {
  const todos = useAppSelector((store) => store.todo)
  const dispatch = useDispatch()

  function deleteTodo(id: number) {
    dispatch(remove({ id }))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-12" />
          <TableHead className="w-full text-left">Description</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="min-w-12" />
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
            <TableCell>
              <Button
                size={'icon'}
                variant={'link'}
                onClick={() => deleteTodo(todo.id)}
                className="w-min h-min p-0"
              >
                <TrashIcon className="w-4 h-4 text-destructive" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
