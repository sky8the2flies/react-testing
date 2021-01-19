export type {
    Action,
}

interface Action {
    type: string
    payload: Payload
}

interface Payload {
    name?: string
    id?: number
}