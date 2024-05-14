'use client'

import { PlusIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Form, FormField, FormItem } from './ui/form'
import { Input } from './ui/input'

export function AddNewTodo() {
  const form = useForm()

  function addNewToDo() {
    console.log('Add new todo')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(addNewToDo)}
        className="flex w-full gap-2"
      >
        <FormField
          name="todo"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <Input
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
