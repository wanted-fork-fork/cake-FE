/* global kakao */
import { useEffect, useMemo, useRef, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "@src/store/root.store";
import MapService from "@src/services/Map.service";

const MapComponent = observer(() => {
  const { userStore, mapService } = useStores();

  const mapDivRef = useRef(null);

  const [center, setCenter] = useState(null);
  const [cafeList, setCafeList] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const infoWindow = useMemo(
    () =>
      new window.kakao.maps.InfoWindow({
        content: selectedCafe?.place_name || "hi",
        removable: true,
      }),
    [selectedCafe],
  );

  console.log(selectedCafe);

  useEffect(() => {
    if (mapDivRef.current && !mapLoaded && center && cafeList.length > 0) {
      setMapLoaded(true);

      const mapOption = {
        center: new window.kakao.maps.LatLng(center.y, center.x), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      // eslint-disable-next-line no-new
      const map = new window.kakao.maps.Map(mapDivRef.current, mapOption);

      cafeList.map((cafe) => {
        const marker = new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(cafe.y, cafe.x),
          title: cafe.title,
          clickable: true,
        });
        window.kakao.maps.event.addListener(marker, "click", () => {
          setSelectedCafe(cafe);
          infoWindow.open(map, marker);
        });
        return marker;
      });
    }
  }, [cafeList, center, infoWindow, selectedCafe]);

  useEffect(() => {
    if (!userStore.myUniv) {
      userStore.getMyUniv();
    } else if (!center) {
      mapService.searchWithKeyword(userStore.myUniv).then((res) => {
        const found = res.documents[0];
        setCenter({ x: found.x, y: found.y });
        mapService.searchWithCategories(found.x, found.y).then((res) => {
          setCafeList(res.documents);
        });
      });
    }
  }, [center, mapService, userStore, userStore.myUniv]);

  return <div ref={mapDivRef} style={{ width: "500px", height: "500px" }} />;
});

export default MapComponent;
