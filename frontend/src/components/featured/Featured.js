import "./featured.css"

const featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
                src="https://q-xx.bstatic.com/xdata/images/city/250x250/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&amp;o="
                alt="Bangalore"  
                className="feacturedImg" />
            <div className="featuredTitles">
                <h1> Bangalore</h1>
                {/* <h2> 533 properties</h2> */}
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://q-xx.bstatic.com/xdata/images/region/250x250/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&amp;o=" 
                alt="Goa"
                className="feacturedImg" />
            <div className="featuredTitles">
                <h1>Goa </h1>
                {/* <h2> 533 properties</h2> */}
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://q-xx.bstatic.com/xdata/images/city/250x250/684716.jpg?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&amp;o=" 
                alt="Manali" 
                className="feacturedImg" 
            />
            <div className="featuredTitles">
                <h1> Manali</h1>
                {/* <h2> 533 properties</h2> */}
            </div>
        </div>

    </div>
  )
}

export default featured