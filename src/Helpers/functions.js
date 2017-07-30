import $ from 'jquery';

export function getUser(value, id, image, state, loading){
  $.ajax({
    beforeSend : function(){value !== "" ?  $(loading).show() : alert("Insira um usuario no " + (id === '1' ? "primeiro" : "segundo") + "campo")  },
    complete : function(){ $(loading).hide();},
    error : function(i, j){ if (i["status"] === 404) { alert("Usuario \"" + value + "\" não encontrado"); }},
    type: "GET",
    url: "https://api.github.com/users/" + value,
    success: function (account){
      $(image).css({"background-image" : "url(" + account['avatar_url'] + ")"});
      state.setState( {
        link : account['html_url'],
        title : account["name"],
        name : (account["name"] != null ? account["name"] : "Usuario sem nome!"),
        status:"S",
        value : value
      });
      console.log(value);
    }
  });
}

export function getScore(user){
  var followers_points = 0;
  var repo_points = 0;
  $.ajax({
    type : "GET",
    url : "https://api.github.com/users/" + user,
    async:false,
    error : function(i){
      console.log(i);
    },
    success : function(account){ followers_points = account['followers'] * 2; },
  });
  $.ajax({
    type : "GET",
    url : "https://api.github.com/users/" + user + "/repos",
    async:false,
    success : function(repos){
      repos.forEach(function(x){
      repo_points += x['stargazers_count'] * 5;
    });},
  });
  var score = repo_points + followers_points;
  return score;
}

export function getWinner(first, second){
    var id;
    if (first > second) {
      id = 1;
    }else if (second > first) {
      id = 2;
    }else {
      id = 0;
    }
    return id;
}
