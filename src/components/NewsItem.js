import React  from 'react'

const  NewsItem = (props) => {

  
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card my-2" >
                    <div style={{display : 'flex',justifyContent : 'flex-end',position : 'absolute',right :'0'}}>
                        <span className="badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}> {source}</span>
                    </div>

                    <img src={!imageUrl ? "https:images.hindustantimes.com/img/2021/09/17/1600x900/pm_modi_pti_1200x768_1631681075132_1631844148602.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more....</a>
                    </div>
                </div>
            </div>
        )
    
}
export default NewsItem
