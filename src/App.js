import "./App.css";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Header from "./components/Header/Header";
import BannerVideo from "./components/BannerVideo/BannerVideo";
import TaggedProducts from "./components/TaggedProducts/TaggedProducts";
import CompleteMyLook from "./components/CompleteMyLook/CompleteMyLook";
import Favourites from "./components/Favourites/Favourites";
function App() {
  return (
    <>
      <div className="App">
        <Whatsapp />
        <Header />
        <BannerVideo />
        <TaggedProducts heading="Tagged Products (2)" />
        <CompleteMyLook
          heading="Complete my Look"
          ArcdName="DIOR Backstage Foundation"
        />
        <Favourites heading="More from my favourites" />
      </div>
    </>
  );
}

export default App;
