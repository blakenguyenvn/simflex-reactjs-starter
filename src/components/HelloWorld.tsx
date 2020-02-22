import * as React from 'react';
import * as HelloWorldStyles from '../assets/styles/components/HelloWorld.scss';
import Button from '@material-ui/core/Button';

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
    return (
      <div className={HelloWorldStyles.card}>
        <h1 className={HelloWorldStyles.heading}>
          {this.state.title}
        </h1>
        <p className={HelloWorldStyles.introduction}>
          {this.state.introduction}
        </p>
        <div>
          <Button variant="contained" color="secondary">
            Go To App
          </Button>
        </div>
      </div>
    );
  }
};
