import React from 'react'
import MovieList from '../../../components/Home/MovieList'
import Filter from '../../../components/Home/Filter'
import PageTitle from '../../../components/Home/PageTitle'
export default function index() {
  return (
    <div>
      <PageTitle />
      <Filter />
      <MovieList />
    </div>
  )
}
