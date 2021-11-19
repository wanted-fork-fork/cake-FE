/* eslint-disable camelcase */
export interface SearchPlaceDto {
  meta: {
    total_count: number;
    is_end: boolean;
  };
  documents: {
    place_name: string;
    address_name: string;
    road_address_name: string;
    id: number;
    x: number;
    y: number;
  }[];
}
