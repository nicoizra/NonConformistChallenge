export type Photo = {
  uri: string;
  location: Location;
  takenAt: Date;
};

export type Location = {
  latitude: number;
  longitude: number;
} | null;
