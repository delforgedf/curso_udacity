import React  from "react";
import ListUsers from "./ListUsers"

const ListMovies = props => {
  const { movie_id , users, userLikeMovie , movies } = props;

  return (
    <li>
        <h2>{movies[movie_id].name}</h2>
        <h3>Liked By:</h3>
        <ListUsers 
          userLikeMovie = {userLikeMovie}
          users = {users}
        />
      </li>
  )
}


// class ListMovies extends Component {
//   render() {
//     const { movie_id , users, userLikeMovie , movies } = this.props;
//     return (
//       <li>
//         <h2>{movies[movie_id].name}</h2>
//         <h3>Liked By:</h3>
//         <ListUsers 
//           userLikeMovie = {userLikeMovie}
//           users = {users}
//         />
//       </li>
//     );
//     // return (<h2>jonatas</h2>)
//   }
// }

export default ListMovies;
