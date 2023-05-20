// /* eslint-disable no-unused-vars */
// import React, { useContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import CreatableSelect from "react-select/creatable";

// const AddToy = () => {
//   const { user } = useContext(AuthContext);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     data.skills = selectedOption;

//     fetch("http://localhost:5000/post-job", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//       });
//     console.log(data);
//   };
//   const options = [
//     { value: "JavaScript", label: "JavaScript" },
//     { value: "C++", label: "C++" },
//     { value: "HTML", label: "HTML" },
//     { value: "CSS", label: "CSS" },
//     { value: "React", label: "React" },
//     { value: "Node", label: "Node" },
//     { value: "MongoDB", label: "MongoDB" },
//     { value: "Redux", label: "Redux" },
//   ];
//   //   console.log(user);
//   return (
//     <div className="">
//       <div className="add-job row">
//         <div className="col-md-8">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {errors.exampleRequired && <span>This field is required</span>}
//             <input
//               className=""
//               {...register("title")}
//               placeholder="title"
//               defaultValue="Web developer"
//             />

//             <input
//               className=""
//               {...register("salary", { required: true })}
//               placeholder="salary"
//               defaultValue="30k"
//             />
//             <input
//               className=""
//               {...register("vacancy", { required: true })}
//               placeholder="vacancy"
//               type="number"
//             />
//             <select className="" {...register("category")}>
//               <option value="Engineering">engineering</option>
//               <option value="Editor">Editor</option>
//               <option value="writer">Writer</option>
//               <option value="Developer">Developer</option>
//             </select>
//             <select className="" {...register("status")}>
//               <option value="remote">Remote</option>
//               <option value="offline">Offline</option>
//             </select>
//             <input
//               className=""
//               {...register("image")}
//               placeholder="image link"
//               type="url"
//               defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
//             />
//             <input
//               className=""
//               {...register("deadline")}
//               placeholder="deadline"
//               type="date"
//             />
//             <input
//               className=""
//               value={user?.email}
//               {...register("postedBy")}
//               placeholder="your email"
//               type="email"
//             />
//             <CreatableSelect
//               className="w-75"
//               defaultValue={selectedOption}
//               onChange={setSelectedOption}
//               options={options}
//               isMulti
//             />
//             <input
//               className="text-input"
//               {...register("description")}
//               placeholder="description"
//             />
//             <input className="" value="Post Job" type="submit" />
//           </form>
//         </div>
//         <div className="col-md-4">
//           <img
//             className="w-100"
//             src="https://i.ibb.co/rthZ75K/pngtree-job-vacancy-with-join-our-team-recruitment-vector-design-png-image-6419066-removebg-preview.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddToy;
