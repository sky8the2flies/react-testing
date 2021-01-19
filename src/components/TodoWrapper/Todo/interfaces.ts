export type {
    Props,
    TodoType,
}

interface Props {
    todo: TodoType
    dispatch: Function
}

interface TodoType {
    id: number
    name: string
    complete: boolean
}