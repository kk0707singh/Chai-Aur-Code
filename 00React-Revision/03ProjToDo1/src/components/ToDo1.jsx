import React from 'react'

function ToDo1() {

let todoName = 'Buy Milk'
let todoDate = '04/01/2025'
    return (
        <div class="container">
        <div class="row">
          <div class="col-6">{todoName}</div>

          <div class="col-4">{todoDate}</div>

          <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
          
        </div>
        </div>
    )
}

export default ToDo1
