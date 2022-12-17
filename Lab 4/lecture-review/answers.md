1. The difference between props and state is that state is internal and controlled by the component itself whereas props are external and are controlled by whatever renders the component e.g:

<MyChild name={this.state.childsName} />
this.setState({ childsName: 'New name' });

2. A functor in JavaScript is something that can be mapped over. It is a mapping from category to category. Functors can map from a category to the same category. A category is a collection of objects with arrows in between the objects.

3. Promises:
   -Promises are designed to be executed only once and then self-destruct. In certain situations, this is a very helpful feature, since this adds clarity to the code where it’s important to guarantee the callback cannot be called the second time.

-Only one object can be returned and multiple arguments cannot be returned either.

Callbacks:

-The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call

-The biggest problem with callbacks is that they do not scale well for even moderately complex asynchronous code. The resulting code often becomes hard to read, easy to break, and hard to debug

Streams:

-Streams help read large chunks of data in pieces and process them instead of reading them all at once which is the traditional way.

-Once a Stream is consumed, it can't be used later on

4.

div {
width: 300px;
border: 15px solid green;
padding: 50px;
margin: 20px;
}

Padding - Clears an area around the content. The padding is transparent.
Border - A border that goes around the padding and content.
Margin - Clears an area outside the border. The margin is transparent.
