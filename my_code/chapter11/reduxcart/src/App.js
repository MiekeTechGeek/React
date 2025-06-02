// import { connect } from "react-redux";
// import Cart from "./Cart";

// //keeps track of the application state
// function mapStateToProps(state) {
//   return {
//     totalCost: state.totalCost,
//     productCart: state.productCart
//   }
// }

// //calls action methods (updates application state)
// function mapDispatchToProps(dispatch) {
//   return {
//     onAddProduct: (productName, productPrice) => dispatch({
//       type: "addProduct",
//       productData: {
//         productName: productName,
//         productPrice: productPrice
//       }
//     }),
//     onDeleteProduct: (productData) => dispatch({
//       type: "deleteProduct",
//       productData: productData
//     })
//   }
// }

// //connects dispatch methods to cart
// //allows us to add and delete products
// let connectedComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Cart);

// export default connectedComponent;


import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Counter Component
const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Redux Counter App
        </h1>
        
        <div className="text-center mb-6">
          <span className="text-6xl font-bold text-blue-600">{count}</span>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -
          </button>
          
          <button
            onClick={() => dispatch(reset())}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-600">
          {/* <h3 className="font-semibold mb-2">File Structure Implementation:</h3> */}
          <ul className="text-xs space-y-1">
            {/* <li>• <code>App.js</code> - Main component with Redux Provider</li>
            <li>• <code>reducer.js</code> - Counter reducer logic</li>
            <li>• <code>index.js</code> - App entry point</li>
            <li>• <code>App.css</code> - Styling (using Tailwind here)</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;