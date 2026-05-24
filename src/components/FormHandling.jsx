// import { useState } from "react";

// const FormHandling = () => {
// //   const [fullName, setFullName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// const [data,setData] = 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log("Full Name: ", fullName);
//     // console.log("Email: ", email);
//     // console.log("Password: ", password);
//     // console.log("Confirm Pass: ", confirmPassword);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 space-y-4">
//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         className="w-full border p-2"
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         className="w-full border p-2"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         className="w-full border p-2"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       <input
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm Password"
//         className="w-full border p-2"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//       />

//       <button type="submit" className="w-full bg-black text-white p-2">
//         Register
//       </button>
//     </form>
//   );
// };

// export default FormHandling;


import { useState } from "react";

const FormHandling = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white p-2"
      >
        Register
      </button>
    </form>
  );
};

export default FormHandling;