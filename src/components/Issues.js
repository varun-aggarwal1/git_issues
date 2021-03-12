import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component'
function Issues(props){
    
    const [issues,setIssues] = useState([]);
    
    useEffect(()=>{
    //     // try{
    //     // // const tempIssues = fetch("https://developer.github.com/v3/issues/").then((data)=>c);
    //     // fetch('https://api.github.com/repos/octocat/hello-world/issues/42',{
            
    //     //     headers: {
    //     //         'Accept': 'application/vnd.github.v3+json'
    //     //     }
    //     //     }
    //     // )
    //     // .then(response => response.json())
    //     // .then((json) => 
    //     //    {    var tempIssues = [];
    //     //      tempIssues.push(json);
    //     //         setIssues(tempIssues)
    //     //     console.log(json)

    //     // })
    
    //     // }catch(e){
    //     //     console.log("Error");
    //     // }
    setIssues([{
        author_association: "NONE",
        body: "I'm having a problem with this.↵",
        id: 5575402
    },
    {author_association: "NONE",
        body: "I'm having a problem with this.↵",
        id: 5575402},
        {author_association: "NONE",
        body: "I'm having a problem with this.↵",
        id: 5575402},
        {author_association: "NONE",
        body: "I'm having a problem with this.↵",
        id: 5575402}
    ])
       
    },[])

// const fetchData=()=>{
//     try{
//     fetch('https://developer.github.com/issues',{
//         headers: {
//             'accept': 'application/vnd.github.v3+json'
//         }
//         }
//     )
//     .then(response => response.json())
//     .then((json) => 
//        { setIssues(json)
//         console.log(json)

//     })

//     }catch(e){
//         console.log("Error");
//     }
// }


   
      return(
         <>
         <table style={{"border": "1px solid black", "width": "100%"}} >

        
            {issues.map((ele)=>{
              return (<tr><td style={{"border": "1px solid black"}}>{ele.body}</td></tr>);
          })}
          {/* <h1>Hi</h1> */}

          </table>
         </>
         
   
      );
}
export default Issues;