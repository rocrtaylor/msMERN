import React from "react"

import { useParams } from "react-router-dom"
import PlaceList from "../components/PlaceList"

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "NY Big Building",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/thumbnail5M2VW4ZF.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "NY Big Building",
    imageUrl:
      "https://www.esbnyc.com/sites/default/files/2020-01/thumbnail5M2VW4ZF.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
