import FilteringTemplate from "@src/templates/Filtering.template";
import { useState } from "react";

function SearchPage() {
  const [selectedMine, setSelectedMine] = useState([]);
  const [selectedYours, setSelectedYours] = useState([]);

  return (
    <FilteringTemplate
      selectedMine={selectedMine}
      setSelectedMine={setSelectedMine}
      selectedYours={selectedYours}
      setSelectedYours={setSelectedYours}
    />
  );
}

export default SearchPage;
