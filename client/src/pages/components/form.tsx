import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  age: string;
  experience: string;
  position: string;
}

const AddPersonForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    experience: "",
    position: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-96">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-2 border-black p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="border-2 border-black p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="experience">Year of Experience:</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="border-2 border-black p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="border-2 border-black p-2"
          />
        </div>
        <div>
          <button type="submit" className="border border-black px-10 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPersonForm;
