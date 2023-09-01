type Address = {
  street: string
  number: number
}

type User = {
  name?: string
  age: number
  address: Address
}

type UserProperties = keyof User

function pickProperty(user: User, property: UserProperties) {
  return user[property]
}

const userDefault: User = {
  name: "Erik",
  age: 21,
  address: {
    street: "Rua 1",
    number: 123,
  },
}

console.log(pickProperty(userDefault, "name"))

const video = {
  title: "s",
  duration: 100,
}

type Video = keyof typeof video

// Utility Types

type PickPropertyReturnType = ReturnType<typeof pickProperty>
