// import React, { Component } from 'react';
// import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';

// class App extends Component {
//   render() {
//     const isValid = true;
//     return (
//       <div>
//         {/* <Products />
//         <Button variant="primary" disabled={!isValid}>Default</Button> */}

//         <Rating rating="1" />
//         <Rating rating="2" />
//         <Rating rating="3" />
//         <Rating rating="4" />
//         <Rating rating="5" />
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';

// // Mock Rating component since the original isn't available
// const Rating = ({ rating }) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(
//       <span 
//         key={i} 
//         className={`text-${i <= rating ? 'warning' : 'muted'}`}
//         style={{ fontSize: '1.5rem' }}
//       >
//         ★
//       </span>
//     );
//   }
  
//   return (
//     <div className="d-flex align-items-center mb-2">
//       <div className="me-3">
//         {stars}
//       </div>
//       <span className="badge bg-primary">{rating} Star{rating !== '1' ? 's' : ''}</span>
//     </div>
//   );
// };

// class App extends Component {
//   render() {
//     const isValid = true;
    
//     return (
//       <div className="container mt-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="card shadow-sm">
//               <div className="card-header bg-primary text-white">
//                 <h2 className="card-title mb-0">
//                   <i className="bi bi-star-fill me-2"></i>
//                   Rating System Demo
//                 </h2>
//               </div>
              
//               <div className="card-body">
//                 <p className="text-muted mb-4">
//                   Here are different rating examples from 1 to 5 stars:
//                 </p>
                
//                 <div className="rating-container">
//                   <Rating rating="1" />
//                   <Rating rating="2" />
//                   <Rating rating="3" />
//                   <Rating rating="4" />
//                   <Rating rating="5" />
//                 </div>
                
//                 <hr className="my-4" />
                
//                 <div className="d-flex gap-2 flex-wrap">
//                   <button 
//                     className={`btn btn-primary ${!isValid ? 'disabled' : ''}`}
//                     disabled={!isValid}
//                   >
//                     <i className="bi bi-check-circle me-1"></i>
//                     Primary Action
//                   </button>
                  
//                   <button className="btn btn-outline-secondary">
//                     <i className="bi bi-gear me-1"></i>
//                     Settings
//                   </button>
                  
//                   <button className="btn btn-success">
//                     <i className="bi bi-plus-circle me-1"></i>
//                     Add New
//                   </button>
//                 </div>
//               </div>
              
//               <div className="card-footer text-muted">
//                 <small>Built with React and Bootstrap 5</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';

// Interactive Rating component
const Rating = ({ rating, onRatingChange, label }) => {
  const handleStarClick = (starValue) => {
    if (onRatingChange) {
      onRatingChange(starValue);
    }
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span 
        key={i} 
        className={`text-${i <= rating ? 'warning' : 'muted'}`}
        style={{ 
          fontSize: '1.5rem', 
          cursor: 'pointer',
          transition: 'color 0.2s ease'
        }}
        onClick={() => handleStarClick(i)}
        onMouseEnter={(e) => e.target.style.opacity = '0.7'}
        onMouseLeave={(e) => e.target.style.opacity = '1'}
        title={`Rate ${i} star${i !== 1 ? 's' : ''}`}
      >
        ★
      </span>
    );
  }
  
  return (
    <div className="d-flex align-items-center mb-3 p-3 border rounded bg-light">
      <div className="me-3">
        <strong className="me-2">{label}:</strong>
        {stars}
      </div>
      <span className="badge bg-primary ms-auto">
        {rating} Star{rating !== 1 ? 's' : ''}
      </span>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {
        product1: 1,
        product2: 2,
        product3: 3,
        product4: 4,
        product5: 5
      }
    };
  }

  handleRatingChange = (productKey, newRating) => {
    this.setState({
      ratings: {
        ...this.state.ratings,
        [productKey]: newRating
      }
    });
  }

  resetAllRatings = () => {
    this.setState({
      ratings: {
        product1: 1,
        product2: 1,
        product3: 1,
        product4: 1,
        product5: 1
      }
    });
  }

  render() {
    const isValid = true;
    
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h2 className="card-title mb-0">
                  <i className="bi bi-star-fill me-2"></i>
                  Rating System Demo
                </h2>
              </div>
              
                              <div className="card-body">
                <p className="text-muted mb-4">
                  Click on the stars to change the ratings! Each rating is interactive and independent.
                </p>
                
                <div className="rating-container">
                  <Rating 
                    rating={this.state.ratings.product1} 
                    onRatingChange={(rating) => this.handleRatingChange('product1', rating)}
                    label="Product A"
                  />
                  <Rating 
                    rating={this.state.ratings.product2} 
                    onRatingChange={(rating) => this.handleRatingChange('product2', rating)}
                    label="Product B"
                  />
                  <Rating 
                    rating={this.state.ratings.product3} 
                    onRatingChange={(rating) => this.handleRatingChange('product3', rating)}
                    label="Product C"
                  />
                  <Rating 
                    rating={this.state.ratings.product4} 
                    onRatingChange={(rating) => this.handleRatingChange('product4', rating)}
                    label="Product D"
                  />
                  <Rating 
                    rating={this.state.ratings.product5} 
                    onRatingChange={(rating) => this.handleRatingChange('product5', rating)}
                    label="Product E"
                  />
                </div>
                
                <hr className="my-4" />
                
                <div className="d-flex gap-2 flex-wrap justify-content-between align-items-center">
                  <div className="d-flex gap-2 flex-wrap">
                    <button 
                      className={`btn btn-primary ${!isValid ? 'disabled' : ''}`}
                      disabled={!isValid}
                    >
                      <i className="bi bi-check-circle me-1"></i>
                      Submit Ratings
                    </button>
                    
                    <button className="btn btn-outline-secondary">
                      <i className="bi bi-gear me-1"></i>
                      Settings
                    </button>
                  </div>
                  
                  <button 
                    className="btn btn-warning"
                    onClick={this.resetAllRatings}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Reset All
                  </button>
                </div>
                
                <div className="mt-4 p-3 bg-info bg-opacity-10 rounded">
                  <h6 className="text-info mb-2">Current Ratings Summary:</h6>
                  <div className="row">
                    {Object.entries(this.state.ratings).map(([key, rating], index) => (
                      <div key={key} className="col-md-2 col-4 text-center">
                        <small className="text-muted d-block">Product {String.fromCharCode(65 + index)}</small>
                        <span className="badge bg-secondary">{rating}★</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="card-footer text-muted">
                <small>Built with React and Bootstrap 5</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;