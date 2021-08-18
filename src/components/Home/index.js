import React, { useState, useEffect } from 'react'
// styles
import { Wrapper, Grid, SearchBarWrapper, SearchBar } from './Home.styles'
// icons
import { BsSearch } from 'react-icons/bs'
// import componet Photos
import Photos from '../Photos'
const clientdID = process.env.REACT_APP_ACCESS_KEY
// bascic url to fetch photos
const basicUrl = `https://api.unsplash.com/photos`
const searchUrl = `https://api.unsplash.com/search/photos`

const Home = () => {
  // usestate to fetch photos
  const [photos, setPhotos] = useState([])
  // set page
  const [page, setPage] = useState(1)
  // set query
  const [query, setQuery] = useState('')
  // usestate for search query
  const [search, setSearch] = useState('')
  // set loading
  const [loading, setLoading] = useState(false)
  // client id parameter
  const ID = `?client_id=`
  // page url
  const urlPage = `&page=${page}`
  // query url
  const urlQuery = `&query=${query}`

  // fetch photos
  const fetchPhotos = async () => {
    let url
    if (query) {
      url = `${searchUrl}${ID}${clientdID}${urlPage}${urlQuery}`
    } else {
      url = `${basicUrl}${ID}${clientdID}${urlPage}`
    }
    try {
      // set loading
      setLoading(true)
      // fetch photos
      const response = await fetch(url)
      // get data
      const data = await response.json()
      // set photos
      setPhotos((prev) => {
        // conditional for query
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...prev, ...data.results]
        } else {
          return [...prev, ...data]
        }
      })

      // set loading
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  // useeffect to fetch photos
  useEffect(() => {
    fetchPhotos()
    // refetch photos when page change
  }, [page, query])

  // useeffect infinte scroll
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.scrollY > document.body.scrollHeight - window.innerHeight - 100
      ) {
        // fetch more photos
        setPage((prev) => {
          return prev + 1
          // remove addEventListener
        })
        console.log('funcionando')
      }
    })
    window.removeEventListener('scroll', event)
  }, [])

  const searchPhotos = async () => {
    let queryString
    // const page = Math.floor(Math.random() * 19) + 1

    if (search) {
      // if search query is not empty
      queryString = `${urlQuery}`
    } else if (search) {
      // if no search query, return all Photos
      queryString = ''
    } else {
      // if search query is not found, return all Photos
      setSearch([])
    }

    setLoading(false)
  }

  useEffect(() => {
    searchPhotos()
  }, [search, searchPhotos])

  return (
    <Wrapper>
      <SearchBarWrapper>
        <SearchBar>
          <BsSearch className='icon' />
          <form>
            <input
              type='text'
              placeholder='Pesquisar...'
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
            />
          </form>
        </SearchBar>
      </SearchBarWrapper>
      {/* // map through photos */}
      <Grid>
        {photos.map(
          (photo) => (
            console.log(photo), (<Photos key={photo.id} {...photo} />)
          )
        )}
      </Grid>
      {loading && <h2>Carregando...</h2>}
    </Wrapper>
  )
}

export default Home
