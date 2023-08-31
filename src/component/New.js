import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
export class New extends Component {
  static defaultProps={
    country: 'in',
    pageSize: '6',
    category: 'general'

  }
  capitalizefirstlatter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    console.log("I am Constructor ")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title =`News - ${this.capitalizefirstlatter(this.props.category)}`;
    
  }

  async updatenews()
  {
    this.props.setProgress(15)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9be041080bd648c485439e49053a4973&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url)
    this.props.setProgress(45)
    let parsedData = await data.json()
    this.props.setProgress(75)
    this.setState({          
       articles: parsedData.articles,     
       loading: false,})
       this.props.setProgress(100)
   
  }

  async componentDidMount(){
   this.updatenews();
  }
    
  handlenextclick = async ()=>
  {
    this.setState({page: this.state.page + 1})
    this.updatenews();
  }

  handleprevclick = async ()=>
  {
    this.setState({page: this.state.page - 1})
   this.updatenews();
  }

  render() {
    return (
      <>
      <div className='container my-3'>
        <h3 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}  >RKNews - Headlines</h3>
        {this.state.loading && <Spinner/>}
       <div className='row'>
        { this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <Newsitem title={element.title?element.title.slice(0,40):""} discription={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsurl={element.url}
                  author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
        </div>
        })}
      

       </div>
      
       <div className="d-flex justify-content-between">
       <button disabled={this.state.page<=1}className="btn btn-danger " onClick={this.handleprevclick}> &larr; Previous</button>
        <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))} className="btn btn-warning " onClick={this.handlenextclick}>Next &#10132;</button>
       </div>
       </div>
       </>
    );
  }
}

export default New;
