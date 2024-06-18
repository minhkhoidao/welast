import "./App.css";
import CardItem from "./components/CardItem/CardItem";
import ListButton from "./components/ListButton";
import Modal from "./components/Modals";
import useDataRepos from "./hooks/useDataRepos";
import useOpenModal from "./hooks/useOpenModal";

function App() {
  const { renderDataByLanguage, isLoading, languages, filterByLanguage } =
    useDataRepos();
  const { open, handleClose } = useOpenModal();

  return (
    <div className="container">
      <ListButton languages={languages} filterByLanguage={filterByLanguage} />

      <div className="list">
        {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {renderDataByLanguage?.map((item) => {
          return <CardItem key={item?.id} item={item} />;
        })}
      </div>
      <Modal open={open} onClose={handleClose} />
    </div>
  );
}

export default App;
