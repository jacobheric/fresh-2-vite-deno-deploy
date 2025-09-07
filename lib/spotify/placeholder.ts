// Placeholder types to replace @spotify/web-api-ts-sdk
// These are no-op placeholders for debugging build issues

export interface Device {
  id?: string;
  name: string;
  type?: string;
  volume_percent?: number;
  is_active?: boolean;
  is_private_session?: boolean;
  is_restricted?: boolean;
}

export interface Track {
  name: string;
  uri: string;
  external_urls?: {
    spotify?: string;
  };
  album: {
    name: string;
    images: Array<{
      url: string;
      height?: number;
      width?: number;
    }>;
  };
  artists: Array<{
    name: string;
  }>;
}

export interface Playlist {
  id?: string;
  name: string;
  description?: string;
  external_urls?: {
    spotify?: string;
  };
  tracks?: {
    total: number;
  };
}

export interface User {
  id: string;
  display_name?: string;
  external_urls?: {
    spotify?: string;
  };
}
