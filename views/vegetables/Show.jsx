const React = require ('react')

function Show(props) {
    return (
        <div>
            <a href = '/vegetables'> Back to index page </a>
            <h1>{props.vegetable.name}</h1>
            <p>{props.vegetable.name} is {props.vegetable.color} and {props.vegetable.readyToEat? 'It is ready to eat': 'It is not ready to eat'}
            </p>
        </div>
    )
}

module.exports = Show