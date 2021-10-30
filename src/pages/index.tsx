import type { NextPage } from "next";
import styled from "styled-components";
import { observer } from "mobx-react";

// store
import { useStores } from "@src/store/root.store";

const Container = styled.div`
  //background-color: black;
`;

const Home: NextPage = observer(() => {
  const { countStore } = useStores();
  return (
    <Container>
      <p>{countStore.number}</p>
      <button onClick={countStore.increase} type="button">
        +
      </button>
      <button onClick={countStore.decrease} type="button">
        -
      </button>
    </Container>
  );
});

export default Home;
