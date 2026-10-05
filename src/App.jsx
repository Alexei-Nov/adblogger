import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogArticles, setCases } from './toolkitRedux/toolkitSlice'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/data/cases/index.json')
      .then(res => res.json())
      .then(files =>
        Promise.all(
          files.map(file => fetch(`/data/cases/${file}`).then(r => r.json()))
        )
      )
      .then(cases => {
        dispatch(setCases(cases))
      });
    fetch('/data/blog/index.json')
      .then(res => res.json())
      .then(files =>
        Promise.all(
          files.map(file => fetch(`/data/blog/${file}`).then(r => r.json()))
        )
      )
      .then(cases => {
        dispatch(setBlogArticles(cases))
      });
  }, [])


  return (
    <>
      <div className="body-wrapper">
        {/* <Preloader /> */}
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;