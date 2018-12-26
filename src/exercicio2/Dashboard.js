import React from 'react';
import ListMovies from './ListMovies';


const Dashboard  = props => {

  const {users , movies, usersByMovie} = props;
  
  const listaFilmes = Object.keys(movies).map(id => (
    <ListMovies key={id}
        movie_id = {id}
        users = {users}
        userLikeMovie = {usersByMovie[id]}
        movies = {movies}
      />
  ))

  return (<ul>{listaFilmes}</ul>)
}

// class Dashboard extends Component{
//   render(){
//     const {users , movies, usersByMovie} = this.props;
//     const listaFilmes = Object.keys(movies).map(id => (
//       <ListMovies key={id}
//         movie_id = {id}
//         users = {users}
//         userLikeMovie = {usersByMovie[id]}
//         movies = {movies}
//       />
//   ))
//     return (<ul>{listaFilmes}</ul>)
//   }
// }

export default Dashboard;