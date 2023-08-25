import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    let {title,discription,imageUrl,newsurl,author,publishedAt,source} = this.props
    return (
      <div className='my-3'>  
        <div className="card"> 
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0',color:'yellow'}}>

        <span class="badge rounded-pill bg-danger" >{source}</span> 
   
        </div>
            <img src={!imageUrl?"https://content.fortune.com/wp-content/uploads/2022/05/GettyImages-1310316502.jpg?resize=1200,600":imageUrl} className="card-img-top" alt='.....'/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <p className="card-text"  ><small className="text-muted"><b style={{color:'red'}} >By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</b></small></p>   
                <a href={newsurl}  className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    );
  }
}
 
export default Newsitem;
