import React from 'react'


const Layout = () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTUwZDIxNmM0NTkxN2QxMzllYjkxZGM0ODEyYjA3MCIsInN1YiI6IjY1MDA5MjU0ZTBjYTdmMDEyZWI4Y2JiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.85Gj8Hw43UNV7QijRRnb9RxH7VIQtaiBYPSrvsbdfl0'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      const movieList = response.results;
      console.log(movieList)
      
    })
    .catch(err => console.error(err));
    
    
  return (
    <div>
      
    </div>
  )
}

export default Layout