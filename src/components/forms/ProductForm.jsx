// npm
import { useState, useEffect } from "react";

// files
import { createFile } from "../../firebase/cloudStorage";
import InputField from "../InputField";
import data from "../../data/product.json";
import useFirebase from "../../hooks/useFirebase";
import { useModal } from "../../context/ModalContext";
import slugify from "../../scripts/slugify";

export default function ProductForm({ id }) {
  // local state
  const [subTitle, setSubTitle] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [recipe, setRecipe] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  // properties
  const { addDocument, response } = useFirebase();
  const { unSetModal } = useModal();
  const path = `menu/categories/content/${id}/content`;
  const imgPath = `assets/products/image-${subTitle}.png`;
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
      setSubTitle("");
      setInfo("");
      setPrice("");
      setRecipe("");
    }
  }, [response.success]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      if (isValid && isUploaded) {
        const id = slugify(subTitle);
        const doc = { subTitle, info, price, recipe, thumbnail };
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
      <InputField setup={data.title} state={[subTitle, setSubTitle]} />
      <InputField setup={data.info} state={[info, setInfo]} />
      <InputField setup={data.price} state={[price, setPrice]} />
      <InputField setup={data.recipe} state={[recipe, setRecipe]} />
      <input type="file" accept="/image/*" onChange={fileHandler} required />
      <button>Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}
