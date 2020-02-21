import * as React from 'react';
import * as HelloWorldStyles from '../styles/HelloWorld.scss';

interface HelloWorldState {
   title: string,
   introduction: string
};

export class HelloWorld extends React.Component<{}, HelloWorldState> {
  constructor(props: any) {
		super(props);

    this.state = {
      title: 'Welcome to TypeScript and React',
      introduction: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
      Any browser. Any host. Any OS. Open source.`
    };
	};

  render() {
    return <div className={HelloWorldStyles.card}>
      <h1 className={`${HelloWorldStyles.heading} ${HelloWorldStyles.textCenter}`}>
        {this.state.title}
      </h1>
      <p className={`${HelloWorldStyles.introduction} ${HelloWorldStyles.textCenter}`}>
        {this.state.introduction}
      </p>
    </div>;
  }
};
