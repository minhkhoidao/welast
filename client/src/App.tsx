import "./App.css";
import CardItem from "./components/CardItem/CardItem";
import ListButton from "./components/ListButton";
import useDataRepos from "./hooks/useDataRepos";

function App() {
  const { renderDataByLanguage, isLoading, languages, filterByLanguage } =
    useDataRepos();

  console.log(renderDataByLanguage, "renderDataByLanguage");

  return (
    <div className="container">
      <ListButton languages={languages} filterByLanguage={filterByLanguage} />

      <div className="list">
        {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {renderDataByLanguage?.map((item) => {
          return <CardItem key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
