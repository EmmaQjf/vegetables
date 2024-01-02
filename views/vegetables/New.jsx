const React = require('react')

function New(props) {
    return(
    <div>
        <h1>New Vegetable Page</h1>
        <form action="/vegetables" method = 'POST'>
            NAME: <input type = 'text' name='name'/><br/>
            COLOR: <input type = 'text' name='color'/><br/>
            Is it Ready To Eat: <input type = 'checkbox' name='readyToEat'/><br/>
            <input type="submit" value="Create Vegetable"/>
        </form>
    </div>
  )
}

module.exports = New