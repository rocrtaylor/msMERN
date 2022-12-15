import React from "react"
import "../components/UsersList"
import UsersList from "../components/UsersList"

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "Max Schwarz",
      image:
        "https://media.npr.org/assets/img/2014/12/14/ap798386886673_custom-247a20518bf04f86ef4457d12939f46521c8751b.jpg",
      place: 3,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
