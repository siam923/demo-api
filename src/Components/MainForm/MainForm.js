import React from "react";
import { useForm } from "react-hook-form";

import { postData, getData } from "../services/DataService";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const json = JSON.stringify(data);
    const dd = {
      Title: "Zihad 222",
      Author_Name: "Dragon Ball Super",
      Phone: "511848",
      Email: "zihad@demo.com",
      Description: "Hello World"
  }
    try {
      await postData(dd);
    }
    catch (ex){
      console.log(ex);
    }

    // const getDataa = await getData();
    // console.log(getDataa);
  };

  return (
    <section className="mt-5 d-flex justify-content-center">
      <div
        style={{ boxShadow: "3px 3px 5px gray" }}
        className="card w-75 px-4 pt-5"
      >
        <h2 className="text-center">Care-Box Form</h2>
        <div className="card-body">
          <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group mb-3">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                {...register("Title", { required: true })}
              />
              {errors.Title && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group mb-3">
              <input
                type="text"
                placeholder="Author_Name"
                className="form-control"
                {...register("Author_Name", { required: true })}
              />
              {errors.Author_Name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group mb-3">
              <input
                type="text"
                placeholder="Phone"
                className="form-control"
                {...register("Phone", { required: true })}
              />
              {errors.Phone && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                {...register("Email", { required: true })}
              />
              {errors.Email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="form-group">
              <textarea
                type="text"
                className="form-control mb-3"
                placeholder="Description"
                rows="3"
                {...register("Description", { required: true })}
              ></textarea>
              {errors.Description && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            {/* <div class="form-group">
              <input
                type="datetime-local"
                className="form-control mb-3"
                placeholder="Posted_At"
                rows="3"
                {...register("Posted_At", { required: true })}
              ></input>
              {errors.Posted_At && (
                <span className="text-danger">This field is required</span>
              )}
            </div> */}

            <div className="form-group text-center">
              <button type="submit" className="btn btn-dark">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainForm;
