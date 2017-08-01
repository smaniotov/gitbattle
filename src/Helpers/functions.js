import $ from 'jquery';

export function getUser(username){
  return $.ajax({
    type: "GET",
    url: "https://api.github.com/users/" + username
  })
}

export function getScore(username){

  const findUserFollowers = $.ajax({
    type : "GET",
    url : "https://api.github.com/users/" + username,
  });

  const findUserStars = $.ajax({
    type : "GET",
    url : "https://api.github.com/users/" + username + "/repos",
  });

  return Promise.all([findUserFollowers, findUserStars])
    .then(results => {
      return {
        score : (results[0].followers * 2) + results[1].reduce(function(sum, value){
          return sum + value.stargazers_count * 5
        }, 0),
        name : results[0].name
      }
    })
}
