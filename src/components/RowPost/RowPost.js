import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [url,setUrl] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response);
      setMovies(response.data.results)
    }).catch(err =>{
      // alert("Network err")
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      if(response.data.results.length!==0){
        setUrl(response.data.results[0])
      }else{
        console.log("Empty Array");
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )
        }
          
      </div>
     { url && <YouTube opts={opts} videoId={url.key}/>  }
    </div>
  )
}

export default RowPost
