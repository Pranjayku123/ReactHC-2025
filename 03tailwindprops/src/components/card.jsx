import React from 'react'

function Card(props) {
    // console.log(props);
    
  return (
    <>
    <div>
    <article className="cta">
	<img src='https://images.unsplash.com/photo-1569762825621-2dab96140a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDkxMQ&ixlib=rb-1.2.1&q=80&w=400' alt='Small blue-grey yellow-breasted bird' />
	<div className="cta__text-column">
		<h2>{props.username}</h2>
		<p>This image has an aspect ratio of 3/2. But when the text is longer, the image grows too, overriding its aspect ratio. Cool!</p>
		<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">{props.btnText}</a>
	</div>
</article>
    </div>
    </>
  )
}

export default Card