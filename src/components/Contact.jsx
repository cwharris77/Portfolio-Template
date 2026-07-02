import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_mtedn0h",
        "template_330g6jz",
        {
          from_name: form.name,
          to_name: "Cooper Harris",
          from_email: form.email,
          to_email: "cwharris365@gmail.com",
          message: form.message,
        },
        "3plXucd1HHdBa-kMX",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-bgElev border border-line p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-hanken"
        >
          <label className="flex flex-col">
            <span className="text-ink font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Ex: John Doe"
              className="bg-bgDeep py-4 px-6
              placeholder:text-inkDim
              text-ink rounded-lg outline-none
              border border-line font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-ink font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Ex: johndoe@gmail.com"
              className="bg-bgDeep py-4 px-6
              placeholder:text-inkDim
              text-ink rounded-lg outline-none
              border border-line font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-ink font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Ex: I want to speak to you about..."
              className="bg-bgDeep py-4 px-6
              placeholder:text-inkDim
              text-ink rounded-lg outline-none
              border border-line font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-bgDeep
            font-bold font-hanken items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px]
            w-[100px] h-[45px] rounded-[10px] bg-accent
            hover:opacity-90
            transition duration-[0.2s] ease-in-out"
          >
            {loading ? "Sending" : "Send"}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-[22px] sm:h-[22px] w-[19px] h-[19px]"
              aria-hidden="true"
            >
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22 11 13 2 9 22 2Z" />
            </svg>
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
