import  './Details.css';
import { IconContext } from "react-icons/lib";

import {
   PricingSection, PricingWrapper, 
} from './DetailsStyles';

import ReactStars from "react-rating-stars-component";
const Details = () => {
  const ratingChanged = (newRating) => {
  console.log(newRating);
};

  
    return (

        <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
     <PricingWrapper>
     <div className = "card-wrapper">
  <div className = "card">
      <div className = "product-imgs">
      <div className = "img-display">
        <div className = "img-showcase">
          <img src = "https://www.fixiha.tn/wp-content/uploads/2018/09/Perceuse-%C3%A0-percussion-1100W-INGCO-%E2%80%93-ID11008-2.jpg" alt = ""/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = ""/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = ""/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = ""/>
        </div>
      </div>
      <div className = "img-select">
        <div className = "img-item">
         
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = ""/>
         
        </div>
        <div className = "img-item">
         
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = ""/>
          
        </div>
        <div className= "img-item">
          
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = ""/>
        
        </div>
        <div className = "img-item">
         
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = ""/>
         
        </div>
      </div>
    </div>
    <div className = "product-content">
      <h2 className = "product-title">chignole</h2>
     
      <div className = "product-rating">
       <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        <span>4.7(21)</span>
      </div>

      <div className = "product-price">
       <p className = "new-price">Tarif par jour: <span>249.00 DT </span></p>
          <p className = "new-price">Tarif par semaine:<span>249.00 DT </span></p>
            <p className = "new-price">Tarif par mois <span>249.00 DT</span></p>
        <p className = "last-price">Cotion: <span>257.00 DT</span></p>
        
      </div>

      <div className = "product-detail">
        <h2>about this item: </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
        <div className="avatar"> 
         <ul>
          <li>Name: <span>Nibrasse</span></li>
          <li>Ville: <span>Gafsa</span></li>
          <li>Address: <span>Cite saada</span></li>
          <li>Numéro: <span>27896697</span></li>
         
        </ul>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwMtEVoV1bCSZDno7eKQQw7xaodzngOTNNIQ&usqp=CAU" alt="" /></div>
       
       
      </div>

      <div className = "purchase-info">
       
        <button type = "button" className = "btn">
          Add to Cart <i className = "fas fa-shopping-cart"></i>
        </button>
        <button type = "button" className = "btn">Contact</button>
      </div>

     
    </div>
    </div>
    </div>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>

    )
}

export default Details
