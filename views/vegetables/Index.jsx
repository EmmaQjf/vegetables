const React = require('react')

function Index(props) {
    return(
      <div>
         <h1>Vegetables Home Page</h1>
         <a href = "/vegetables/new">Create a new Vegetable here.</a>
         <ul>
            {
                props.vegetables.map((vegetable) => {
                    return (
                        <li key = {vegetable._id}>

                           <a href = {`/vegetables/${vegetable._id}`}> {vegetable.name}</a> has the color of {vegetable.color}
                        </li>

                    )
                    })
            }
        </ul>

      </div>

    )
}

module.exports = Index

// question about the curly baces on line 14 