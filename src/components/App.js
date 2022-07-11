import "./App.css";
import { Header } from '../shared/components/layout/Header';
import { Footer } from '../shared/components/layout/Footer';
import { Content } from '../shared/components/layout/Content';

function App(props) {
  return (
    <>
      <div className="App">
        <Header/>
        <Content>{props.children}</Content>
        <Footer/>
      </div>
    </>
  );
}

export { App };
