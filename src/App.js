import "./App.css";
import Header from "./components/Header/Header";
import BannerVideo from "./components/BannerVideo/BannerVideo";
import TaggedProducts from "./components/TaggedProducts/TaggedProducts";
import CompleteMyLook from "./components/CompleteMyLook/CompleteMyLook";
function App() {
  return (
    <div className="App">
      <Header />

      <BannerVideo />
      <TaggedProducts heading="Tagged Products (2)" />

      <CompleteMyLook
        heading="Complete my Look"
        ArcdName="DIOR Backstage Foundation"
      />
    </div>
  );
}

export default App;
