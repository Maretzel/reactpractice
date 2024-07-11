import loadable from "@loadable/component";
import Header from "home/Header";

const DefComponent = loadable(() => import("./MyComponents"));
const NamedComponent1 = loadable(() => import("./MyComponents"), {
  resolveComponent: components => components.NamedComponent1
});
const NamedComponent = loadable(() => import("./MyComponents"), {
  resolveComponent: (components, prop ) => components[`NamedComponent${prop.index}`]
});

function App() {
  return (
    <div>
      <Header />
      <div>Product App</div>
      <DefComponent />
      <NamedComponent1 />
      <NamedComponent index={1} />
      <NamedComponent index={2} />
    </div>
  );
}

export default App;
