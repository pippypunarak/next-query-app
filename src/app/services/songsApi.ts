"use client";
import axios from "axios";
import { Song } from "../types/song";

const BASE_URL = "http://localhost:3000";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchSongs(): Promise<Song[]> {
  const response = await axiosInstance.get("/songs");
  return response.data;
}

export async function fetchSong(id: string): Promise<Song> {
  const response = await axiosInstance.get(`/songs/${id}`);
  return response.data;
}

export async function createSong(newSong: Song): Promise<Song> {
  const response = await axiosInstance.post("/songs", newSong);
  return response.data;
}

export async function updateSong(updatedSong: Song): Promise<Song> {
  const response = await axiosInstance.put(
    `/songs/${updatedSong.id}`,
    updatedSong
  );
  return response.data;
}

export async function deleteSong(id: string): Promise<void> {
  await axiosInstance.delete(`/songs/${id}`);
}
