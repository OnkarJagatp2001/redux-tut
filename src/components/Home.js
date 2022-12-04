import React from 'react';
function Home()
{
    return(
        <div>
          <div className='add-to-cart'>
          <img src="https://cdn.imgbin.com/16/3/18/imgbin-online-shopping-shopping-cart-logo-e-commerce-market-ZB0j7BGkzwjLHhMxSKi37nGKD.jpg"/>
          </div>
        <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src=" https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_hero_geo_09142021_inline.jpg.large.jpg"></img>
                </div>
                <div className="text-wrapper item">
                <span>I-Phone</span><br/>
                <span>
                    Price:$10000.00
                </span>
                </div>
                <div className="btn-wrapper item">
                <button> Add to Cart </button>
                </div>
            </div>
        </div>
    )
}

export default Home;