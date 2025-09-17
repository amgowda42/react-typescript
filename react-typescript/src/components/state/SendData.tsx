import { useState } from "react";

const SendData = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
    console.log(`Name: ${name}, Email: ${email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>Email</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SendData;
