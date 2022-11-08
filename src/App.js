import { StageCard } from "./Components/Cards/StageCard";
import { useGetListByEndpointData } from "./Hooks/useGetListByEndpointData";

function App() {
  const { state: stages } = useGetListByEndpointData("stages");

  return (
    <ul>
      {stages
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((item) => (
          <StageCard item={item} key={item.id} />
        ))}
    </ul>
  );
}

export default App;
