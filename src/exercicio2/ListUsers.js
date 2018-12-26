import React from "react";

const ListUsers = props => {
  const {users , userLikeMovie} = props;
  
  if(!userLikeMovie || userLikeMovie.length === 0 ){
    return <p>O filme não foi favoritado por nenhum usuario</p>
  }

  const lista =  userLikeMovie.map(user_id => {
    return <li key={user_id}>
            <p>{users[user_id].name}</p>
          </li>
  })
  return <ul>{lista}</ul>;
}

// class ListUsers extends Component{
//   render(){
//     const {users , userLikeMovie} = this.props;
//     if(!userLikeMovie || userLikeMovie.length === 0 ){
//       return <p>O filme não foi favoritado por nenhum usuario</p>
//     }

//     const lista =  userLikeMovie.map(user_id => {
//       return <li key={user_id}>
//               <p>{users[user_id].name}</p>
//             </li>
//     })
//     return <ul>{lista}</ul>;
//   }
// }

export default ListUsers;