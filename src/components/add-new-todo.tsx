'use client'

import { addNewTodo } from '@/lib/features/todos/todos-slice'
import { PlusIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button } from './ui/button'
import { Form, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

type AddNewTodoFormData = {
  text: string
}

export function AddNewTodo() {
  const form = useForm<AddNewTodoFormData>()

  const dispatch = useDispatch()

  function handleAddNewTodo(formData: AddNewTodoFormData) {
    dispatch(addNewTodo(formData))
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddNewTodo)}
        className="flex w-full gap-2"
      >
        <FormField
          name="text"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <Input
                required
                placeholder="Add todo description"
                className="w-full"
                {...field}
              />
            </FormItem>
          )}
        />
        <Button className="gap-2">
          <PlusIcon className="w-4 h-4" />
          Add todo
        </Button>
      </form>
    </Form>
  )
}
