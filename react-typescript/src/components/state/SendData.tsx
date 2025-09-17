import { useState } from "react";

type FormDataType = {
  name: string;
  email: string;
};

const SendData = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);
    alert(`formData: ${JSON.stringify(formData)}`);
    const { name, email } = formData;
    alert(`Name: ${name}, Email: ${email}`);
    console.log(`Name: ${name}, Email: ${email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SendData;
