import "./featured.css"

const featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
                src="https://i.ibb.co/dDjPpLj/image-1.webp"
                alt="delhi"  
                className="feacturedImg" />
            <div className="featuredTitles">
                <h1> Bangalore</h1>
                <h2> 533 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://i.ibb.co/PCJ766r/dubai.png" 
                alt="dubai"
                className="feacturedImg" />
            <div className="featuredTitles">
                <h1>Dubai </h1>
                <h2> 533 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://i.ibb.co/f0rJbCB/paris.png" 
                alt="paris" 
                className="feacturedImg" 
            />
            <div className="featuredTitles">
                <h1> Paris</h1>
                <h2> 533 properties</h2>
            </div>
        </div>

    </div>
  )
}

export default featured