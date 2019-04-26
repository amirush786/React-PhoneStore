import React from 'react'

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
            <h1>Your Cart Is
              <span><i className="px-3 fas fa-thumbs-down"></i></span>  
                 Start Shopping
            <span><i className="fas fa-smile-wink"></i></span>
            </h1>
        </div>
      </div>
    </div>
  )
}
