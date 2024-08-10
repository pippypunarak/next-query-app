"use client";
import { ChangeEvent, FormEvent, FC, useState, useEffect } from "react";
import { Song } from "../types/song";

interface SongFormProps {
  onSubmit: (song: Song) => void;
  initialValue: Omit<Song, "id">;
}
const SongForm: FC<SongFormProps> = ({ onSubmit, initialValue }) => {
  const [formData, setFormData] = useState<Omit<Song, "id">>({
    song: initialValue.song || "",
    album: initialValue.album || "",
  });

  useEffect(() => {
    if (initialValue) {
      console.log("Initial Value:", initialValue);
      setFormData({
        song: initialValue.song || "",
        album: initialValue.album || "",
      });
    }
  }, [initialValue]);

  console.log("Form Data:", formData);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ song: "", album: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div className="mb-6 mx-6">
          <label className="block mb-2 text-sm font-base text-white">
            Song
          </label>
          <input
            onChange={handleChangeInput}
            type="text"
            name="song"
            value={formData.song}
            className="bg-gray-50  text-gray-900 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="mb-6 mx-6">
          <label className="block mb-2 text-sm font-base text-white">
            Album
          </label>
          <input
            onChange={handleChangeInput}
            type="text"
            name="album"
            value={formData.album}
            className="bg-gray-50 text-gray-900 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
      </div>
      <button
        className="bg-green-600 text-white rounded-md px-5 py-2 ml-6"
        type="submit"
        disabled={!formData.song || !formData.album}
      >
        Submit
      </button>
    </form>
  );
};

export default SongForm;
