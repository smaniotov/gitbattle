// import React, {Component} from 'react';
// import './../CSS/Card.css';
// import Button from './Button';
// import Loading from './Loading';
// import $ from 'jquery';
// import { getUser} from './../Helpers/functions';
// //import './WinnerEffect';
// class Card extends Component{
//   constructor(props){
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       link : "https://github.com/", title : "GitHub",
//       name : "Insira o usuário!!!",
//       value : null,
//       status : "N",
//       response : ""
//     }
//   }
// 
//   handleClick(){
//     let id = this.props.id;
//      let input = "#git-" + id;
//      let value = $(input).val();
//      if (value === this.state.value) {
//         console.log(typeof this.state.value, this.state.value);
//      }else if (value === "") {
//        alert("Por favor, insira um username git no " + (id === '1' ? "primeiro" : "segundo ") + " campo!");
//        alert("Insira um usuario no " + (id === '1' ? "primeiro" : "segundo") + "campo")
//      }else{
//        //getUser(value, id, image, state, loading);
//        console.log("Triggered")
//        $("#loading-" + id).show()
//        getUser(value)
//         .then(account => {
//           $('#image-' + id).css({"background-image" : "url(" + account['avatar_url'] + ")"});
//           this.setState( {
//             link : account.html_url,
//             title : account.name,
//             name : (account.name != null ? account.name : "Usuario sem nome!"),
//             status:"S",
//             value : value
//           });
//           $("#loading-" + id).hide();
//         })
//         .catch(error => {
//           if (error.status === 404)
//             alert("Usuario \"" + value + "\" não encontrado");
//           $("#loading-" + id).hide();
//         })
//      }
// 
//    };
// 
//   render(){
//     //const confetti = (this.props.winner === "winner" ? 'inline' : 'none' );
//     const structure = (
//       <div className = "container">
//         <div className = {this.props.winner} key="N" id = {'card-' + this.props.id }>
//         <div></div>
//           <a href = {this.state.link} title ={this.state.title}>
//             <div className = "image" id = {"image-" + this.props.id}>
//               <Loading id = {"loading-" + this.props.id}/>
//             </div>
//           </a>
//           <span className = "name">{this.state.name}</span>
//           <input type= "text" placeholder="Git Account" className ="inputField" id = {"git-" + this.props.id}/>
//           {(this.props.winner === "winner" ? <h1 className = "name">Vencedor</h1> : <Button onClick={this.handleClick} />)}
//         </div>
//       </div>
//     );
//     return structure;
//   }
// }
// 
// 
// export default Card;
