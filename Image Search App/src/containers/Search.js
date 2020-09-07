import React from 'react';
import { Searchbar } from '../components/Searchbar';
import { Searchlist } from '../components/Searchlist';
// smart component is created by class
export class Search extends React.Component{
    constructor(props){
        //Init props and state
        super(props); // calling a parent constructor
        //Initialise the props from parent and give it to the child
        // props ={} its an empty object
        //props.title="Image search app"
        this.state={imagedata:[]};  //state is an object and it is responsible for rendering {printing} the data    
        this.serchtextvalue="";
    }
    componentDidMount()
    {
        // this.giveMeTheData();
    }
    giveMeTheData(searchvalue){
        const url=`http://api.giphy.com/v1/gifs/search?api_key=Hg0c16rgkBylrNLRaVrdoPMqN7ssCssL&q=${searchvalue}&limit=5`
        var promise=fetch(url);
        promise.then(response=>{
            var p=response.json();   //return jason object if the data is in json format otherwise if not it raises a error
            p.then(results=>{          // if the jason is perfect,appropiate it goto then otherwise goto error
                console.log("Data is ",results.data); //data.data is used to access data inside data array
                this.setState({imagedata:results.data});  //it is responsible for fit the data into state and when setstate() is call then it trigger the render
            }).catch(err=>{          
                console.log("error in json ",err);
            });
            console.log("Response is coming ",response);
        }).catch(err=>{
            console.log("error coming from the server ",err);
        });
    }
 takeInput(event){
     let data=event.target.value;
     this.searchtextvalue=data;
     console.log("calling by child ",this.searchtextvalue);
 }
 searchnow(){
     console.log("button is clicked");
     this. giveMeTheData(this.searchtextvalue);
 }
   render(){
       console.log("Render::: image data is ",this.state.imagedata);
    return(
        <div>
            <h1 className="alert-success text-center">{this.props.title}</h1>
        <Searchbar takeInput={this.takeInput.bind(this)} btclick={this.searchnow.bind(this)}/>
        <Searchlist imagedata={this.state.imagedata} />
        </div>
    )
   }
}
/* dumb and old
function search(){
return(
    <div>
        <h1 className="alert-success text-center">{this.props.title}</h1>
    <Searchbar/>
    <Searchlist/>
    </div>
)}
*/