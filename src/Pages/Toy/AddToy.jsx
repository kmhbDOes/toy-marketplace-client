import React from "react";
import Swal from "sweetalert2";

const AddToy = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyPhoto = form.toyPhoto.value;
    const toyName = form.toyName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const inputs = {
      toyPhoto,
      toyName,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      quantity,
      description,
    };

    console.log(inputs);

    //Send data to server
    fetch("http://localhost:5000/newtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl">Book Service: </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Photo</span>
            </label>
            <input
              type="text"
              defaultValue=""
              name="toyPhoto"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              defaultValue=""
              name="toyName"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              //   defaultValue={user?.email}
              placeholder="Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              //   defaultValue={"$" + "price"}
              className="input input-bordered"
              placeholder="Seller Email"
              name="sellerEmail"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              //   defaultValue={user?.email}
              placeholder="category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              //   defaultValue={user?.email}
              placeholder="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              //   defaultValue={user?.email}
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              //   defaultValue={user?.email}
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            //   defaultValue={user?.email}
            placeholder="Description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default AddToy;
