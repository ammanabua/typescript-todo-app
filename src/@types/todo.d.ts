import { FormEvent } from "react"

export interface Todo {
    id: string
    task: string
    tag: string
    isCompleted: boolean
}

export type TodoProps = {
    todos: Todo[]
    filtered: Todo[]
    handleAddTodo: (todo: Todo) => void
    handleDeleteTodo: (id: string) => void
    handleFilterTodo: (tag: string) => void
    handleCheckTodo: (id: string) => void
    handleSubmitTodo: (e:FormEvent) => void
    handleChange: (e: ChangeEvent) => void
    handleAddTag: (e:ChangeEvent) => void
}
