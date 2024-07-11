
import './App.css';
import React, { Component, useState } from "react";

function loadComponent(importFunc) {
  return class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null,
      };
    }

    componentDidMount() {
      importFunc().then((mod) => {
        this.setState({
          Component: mod.default,
        });
      });
    }

    render() {
      return this.state.Component ? (
        <this.state.Component {...this.props} />
      ) : null;
    }
   }
}

const MyDefaultComponent = loadComponent(() => import("./MyDefaultComponent"));
function App() {
  const [names, setNames] = useState(null);

  const onLoad = async () => {
    const names = (await import("./names")).default;

    const makeUpperCase = (await import("./utilities" /* webpackChunkName: "utilities"*/)).makeUpperCase;
    setNames(makeUpperCase(names));
  }

  return (
    <div>
      <div>Home App</div>
      <button onClick={onLoad}>Load</button>
      <div>{JSON.stringify(names)}</div>
      {names && <MyDefaultComponent />}
    </div>
  );
}

export default App;
