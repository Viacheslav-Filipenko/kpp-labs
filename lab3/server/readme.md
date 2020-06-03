# Todo server

- [Get todos](https://github.com/Viacheslav-Filipenko/kpp-labs/tree/master/lab3/server#get-todos)
- [Get todo](https://github.com/Viacheslav-Filipenko/kpp-labs/tree/master/lab3/server#get-todo)
- [Update todo](https://github.com/Viacheslav-Filipenko/kpp-labs/tree/master/lab3/server#update-todo)
- [Delete todo](https://github.com/Viacheslav-Filipenko/kpp-labs/tree/master/lab3/server#delete-todo)

## Get todos

Retrieve all todos.

### URI

```text
https://todo-training.herokuapp.com/todos
```

### HTTP Method

GET

### Required Parameters

(none)

### Sample Request

```text
https://todo-training.herokuapp.com/todos
```

### Sample Response

```json
{
    "data": [
        {
           "id": 1,
            "description": "todo",
            "completed": false,
            "dueDate": null
            "updatedAt": "2019-08-13T11:53:05.551Z",
            "createdAt": "2019-08-13T11:53:05.551Z"
        },
        {
            "id": 2,
            "description": "todo",
            "completed": false,
            "dueDate": null
            "updatedAt": "2019-08-13T11:53:05.551Z",
            "createdAt": "2019-08-13T11:53:05.551Z"
        }
    ]
}

```

## Get todo

Retrieve one todo.

### URI

```text
https://todo-training.herokuapp.com/todos/{id}
```

### HTTP Method

GET

### Required Parameters

| Field | Type       | Description           |
| ----- | ---------- | --------------------- |
| id    | [objectId] | The id of todo to get |

#### Sample Request

```
https://todo-training.herokuapp.com/todos/1
```

#### Sample Response

```
json
{
    "data": {
        "id": 1,
        "description": "todo",
        "completed": false,
        "dueDate": null
        "updatedAt": "2019-08-13T11:53:05.551Z",
        "createdAt": "2019-08-13T11:53:05.551Z"
    }
}

```

## Add todo

Add todo to the todo list.

#### URI

```text
https://todo-training.herokuapp.com/todos
```

#### HTTP Method

POST

#### Required Parameters

| Field       | Type     | Description             |
| ----------- | -------- | ----------------------- |
| description | [string] | the description of todo |

#### Sample Request

```text
https://todo-training.herokuapp.com/todos
```

```json
{
  "description": "todo"
}
```

### Sample Response

```json
{
  "data": {
    "id": 1,
    "description": "todo",
    "updatedAt": "2019-08-13T11:53:05.551Z",
    "createdAt": "2019-08-13T11:53:05.551Z"
  }
}
```

## Update todo

### URI

```text
https://todo-training.herokuapp.com/todos/{id}
```

### HTTP Method

PUT

### Required Parameters

| Field       | Type       | Description              |
| ----------- | ---------- | ------------------------ |
| id          | [objectId] | The id of todo to update |
| description | [string]   | the description of todo  |
| completed   | [bool]     | state of todo            |

### Sample Request

```text
https://todo-training.herokuapp.com/todos/1
```

```json
{
  "description": "todo",
  "completed": true
}
```

### Sample Response

```json
{
  "data": {
    "id": 2,
    "description": "todo",
    "completed": true,
    "updatedAt": "2019-08-13T11:53:05.551Z",
    "createdAt": "2019-08-13T11:53:05.551Z"
  }
}
```

## Delete todo

### URI

```text
https://todo-training.herokuapp.com/todos/{id}
```

### HTTP Method

DELETE

### Required Parameters

| Field | Type       | Description              |
| ----- | ---------- | ------------------------ |
| id    | [objectId] | The id of todo to delete |

### Sample Request

```text
https://todo-training.herokuapp.com/todos/1
```

### Sample Response

```json
{}
```
