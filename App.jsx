import * as React from 'react';
import MainContainer from './src/components/MainContainer';
import Gestur from 'react-native';
import { Axios, getAdapter } from 'axios';
// import apiClient from '/ApiAuth/loggedInClient';


export default function App() {
    return(
        <MainContainer/>

      );
};

// export default class Requests extends React.Component {
//     state = {
//       nameList: []
//     }
//   // make the GET request to fetch data from the URL then using promise function to handle response.
//     componentDidMount() {
//       axios.get(`url`)
//         .then(res => {
//           const nameList = res.data;
//           this.setState({ nameList });
//         })
//     }
  
//     render() {
//      const {nameList} = this.state;
//      return (
//         <ul>
//           { 
//           nameList.map(user => <li>{user.name}</li>)
//           }
//         </ul>
//       )
//     }
//   }

// let one = "https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt" 
// let two = "https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt" 
// let three = "https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt"  
//     const requestOne = axios.get(one); 
//     const requestTwo = axios.get(two); 
//     const requestThree = axios.get(three);  
//     axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {   
//     const responseOne = responses[0]   
//     const responseTwo = responses[1]   
//     const responesThree = responses[2]   
// // use/access the results  
//     })).catch(errors => {
//    // react on errors. 
//     })

//     onPress= async () => {
//         const client = await apiClient();
//         client.get('flashcards')
//         .then(async res => {
//         console.log(res);
//         })
//         .catch(error => console.log(error));
//         }