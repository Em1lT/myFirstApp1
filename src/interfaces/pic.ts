export interface Pic {
    file_id: number;
    user_id: number;
    filename: string;
    filesize: number;
    title: string;
    description: string;
    media_type: string;
    mime_type: string;
    time_added: string;
    screenshot?: string;
    thumbnails?: Thumbnail;

  }

  export interface Thumbnail{
      w160: string;
      w320?: string;
      w640?: string;
  }

  export interface User {
    user_id?: number,
    username: string,
    password?: string,
    email?: string,
    full_name?: string,
    data_created?: Date
  }
  export interface LoginResponse{
      message: string,
      token: string,
      user: User;
  }
  export interface Message{
    message: string;
}
  export interface CheckUsername{
    username: string,
    available: boolean;
}