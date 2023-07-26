// npm
import { useState, useEffect } from "react";

// files
import slugify from "../../scripts/slugify";
import { createFile } from "../../firebase/cloudStorage";
import data from "../../data/category.json";
import InputField from "../InputField";
import useFirebase from "../../hooks/useFirebase";
import { useModal } from "../../context/ModalContext";

export default function CategoryForm() {
  // local state
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  // properties
  const { addDocument, response } = useFirebase();
  const { unSetModal } = useModal();
  const id = slugify(title);
  const path = "menu/categories/content";
  const imgPath = `assets/image-${id}.png`;
  const types = ["image/png", "image/jpeg", "image/jpg"];

  // methods
  function fileHandler(event) {
    let selected = event.target.files[0];
    if (selected && types.includes(selected.type)) {
      setIsValid(true);
      setFile(selected);
      setError("");
    } else {
      setIsValid(null);
      setFile(null);
      setError("Please select valid file input (png or jpg)");
    }
  }

  // upload file img to cloud storage when file dependancy changes and then set value to thumbnail state
  useEffect(() => {
    async function loadImage(ref) {
      if (file) {
        await createFile(ref, file).then((res) => setThumbnail(res));
        setIsUploaded(true);
      }
    }
    loadImage(imgPath);
  }, [file]);

  // if dispatch is success then reset values
  useEffect(() => {
    if (response.success) {
      setTitle("");
      setInfo("");
      setFile(null);
    }
  }, [response.success]);

  // if file input is valid then dispatch payload to database
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      if (isValid && isUploaded) {
        const id = slugify(title);
        const doc = { title, info, thumbnail };
        await addDocument(path, id, doc);
        setLoading(false);
        setError(null);
        unSetModal();
      }
    } catch (err) {
      setError(err);
      setLoading(false);
      console.log(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {loading && <p>Loading ...</p>}
      <InputField setup={data.title} state={[title, setTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      <input type="file" accept="/image/*" onChange={fileHandler} required />
      {isUploaded ? <button>Submit</button> : <button disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  );
}
