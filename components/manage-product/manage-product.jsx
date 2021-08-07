import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import firebase, { firestore, storage } from "../../firebase/utils";
import StyledWrapper from "./style.product";

const initState = {
  name: undefined,
  price: undefined,
  description: undefined,
  image: undefined,
};

export const ManageProduct = () => {
  const [form, setform] = useState({});
  const [placeholder, setplaceholder] = useState({});
  const [imagefile, setimagefile] = useState();
  const [preview, setpreview] = useState();
  const [submitting, setsubmitting] = useState(false);

  useEffect(async () => {
    const prod = (await firestore.doc("products/grooming_kit").get()).data();
    setform(prod);
  }, [imagefile]);

  useEffect(() => {
    if (imagefile) {
      let count = 0;
      setpreview(URL.createObjectURL(imagefile));

      setsubmitting(true);
      const uploadTask = storage
        .ref()
        .child(`products/${imagefile.name}`)
        .put(imagefile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // if (count < 1) toast.info("Upload is started.");
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              if (count < 1) toast.info("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              if (count < 1) toast.info("Upload is running");
              break;
          }
          count = count + 1;
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              toast.info("storage unauthorized!");
              setimagefile(null);
              setpreview(null);
              setsubmitting(false);

              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              toast.info("storage canceled!");
              setimagefile(null);
              setpreview(null);
              setsubmitting(false);

              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              toast.info("storage unknown!");
              setimagefile(null);
              setpreview(null);
              setsubmitting(false);

              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            firestore
              .doc(`products/grooming_kit`)
              .update({
                image: downloadURL,
              })
              .then(() => {
                toast.success("Product Image updated, check out the kit page!");
                setimagefile(null);
                setsubmitting(false);
              })
              .catch((err) => {
                setimagefile(null);
                setpreview(null);
                setsubmitting(false);

                toast.info(err.message);
              });
          });
        }
      );
    }
  }, [imagefile]);

  function handleChange(event) {
    const { name, value } = event.target;
    setform({ ...form, [name]: value });
  }

  function handleChangeImage(e) {
    const file = e.target.files[0];
    setimagefile(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setsubmitting(true);

    firestore
      .doc(`products/grooming_kit`)
      .update({
        ...form,
      })
      .then(() => {
        toast.success("Product Info update, check out the kit page!");
        setsubmitting(false);
      })
      .catch((err) => {
        setsubmitting(false);
        toast.info(err.message);
      });
  }
  console.log(form);
  return (
    <StyledWrapper>
      <h2>Manage Product Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="preview">
          {preview || form?.image ? (
            <img src={preview || form.image} />
          ) : (
            "Loading..."
          )}
        </div>
        <div className="form-content">
          <div className="image-upload">
            <input
              disabled={submitting}
              type="file"
              accept="image/*"
              onChange={handleChangeImage}
            />
          </div>
          <div>
            <label htmlFor="pname">Product Name</label>
            <input
              id="pname"
              disabled={submitting}
              autoComplete="off"
              name="name"
              value={form?.name}
              type="text"
              onChange={handleChange}
              placeholder={placeholder?.name}
            />
          </div>
          <div>
            <label htmlFor="pprice">Product Price</label>
            <input
              id="pprice"
              disabled={submitting}
              autoComplete="off"
              name="price"
              value={form?.price}
              type="text"
              onChange={handleChange}
              placeholder={placeholder?.price}
            />
          </div>
          <div>
            <label htmlFor="pdesc">Product Description</label>
            <textarea
              rows="5"
              disabled={submitting}
              autoComplete="off"
              id="pdesc"
              name="description"
              value={form?.description}
              onChange={handleChange}
              placeholder={placeholder?.description}
            />
          </div>
          <button disabled={submitting} type="submit">
            Update Info
          </button>
        </div>
      </form>
    </StyledWrapper>
  );
};
