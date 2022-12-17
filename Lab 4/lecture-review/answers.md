1. The difference between props and state is that state is internal and controlled by the component itself whereas props are external and are controlled by whatever renders the component e.g:

<MyChild name={this.state.childsName} />
this.setState({ childsName: 'New name' });
