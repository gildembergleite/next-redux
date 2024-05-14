import { AddNewTodo } from '@/components/add-new-todo'
import { TodoListTable } from '@/components/todo-list-table'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen justify-center items-center gap-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        NextJS + Redux
      </h1>
      <div className="space-y-8 w-full max-w-md mx-20">
        <AddNewTodo />
        <section>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Todo list
          </h2>
          <TodoListTable />
        </section>
      </div>
    </main>
  )
}
