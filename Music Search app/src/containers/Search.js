import React from 'react';
import { Searchbar } from '../components/Searchbar';
import { Searchlist } from '../components/Searchlist';

export class Search extends React.Component{
constructor(props){
    super(props);
    this.state={audiodata:[]};
    this.searchtextvalue="";
}
givemedata(searchvalue){
    const url=`https://itunes.apple.com/search?term=${searchvalue}&limit=12`;
    var promise=fetch(url);
    promise.then(response=>{
        var p=response.json();
        p.then(data=>{
            console.log("data is ",data.results);
            this.setState({audiodata:data.results});
        }).catch(err=>{
            console.log("error in data ",err)
        })
        console.log("Response coming from Server ",response);
    }).catch(err=>{
console.log("Error from the Server ",err);
    });
}
takeinput(event){
    let data=event.target.value;
    this.searchtextvalue=data;
console.log("by child ",this.searchtextvalue);
}
searchnow(){
    this.givemedata(this.searchtextvalue);
console.log("child called");
}
render(){
    console.log("render::: audio data is ",this.state.audiodata);
    return(
        <div>
        <h1 className="alert-danger text-center">Music Search App {this.props.title}</h1>
         <Searchbar takeinput={this.takeinput.bind(this)} searchnow={this.searchnow.bind(this)}/>
        <Searchlist audiodata={this.state.audiodata}/>
        </div>
    )

}
}