import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovies } from '../../redux/features/movieSlice';
import Movies from '../../pages/Movies';






const TopRated = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  let baseURL = "https://image.tmdb.org/t/p/"
  let imgSize = "w500/"
  const [movieData, setMovieData] = useState([]);
  const fetchData = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTUwZDIxNmM0NTkxN2QxMzllYjkxZGM0ODEyYjA3MCIsInN1YiI6IjY1MDA5MjU0ZTBjYTdmMDEyZWI4Y2JiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.85Gj8Hw43UNV7QijRRnb9RxH7VIQtaiBYPSrvsbdfl0'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {

        setMovieData(data.results)
        dispatch(addMovies(data.results))

      })
      .catch(err => console.error(err));


  }

  useEffect(() => {
    fetchData()
  }, [])


  const handleClick = (id) => {
    navigate("movie");
  };

  return (
    <div className='grid grid-cols-4 px-[6.12rem] gap-[5rem]'>
      {movieData.slice(0, 10).map((item) => (
          <div key={item.id}  className='w-[15rem]'>
            <div className='h-[23rem] w-full'>
              <img src={baseURL + imgSize + item.backdrop_path} onClick={handleClick}  className='h-full w-full object-cover' />
            </div>
            <div>
              <p className='text-xs font-bold text-[#9CA3AF]'>{item.release_date}</p>
              <p className='text-lg font-bold text-[#111827]'>{item.original_title}</p>
              <div className='flex justify-between w-full text-xs font-normal text-[#111827]'>
                <p>80/100</p>
                <p>{item.vote_average}</p>
              </div>

            </div>


          </div>
        )
      )}
      
    </div>
  )
}

export default TopRated