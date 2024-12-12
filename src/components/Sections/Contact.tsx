// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Send, Phone, Mail, MapPin } from "lucide-react";

// export const Contact = () => {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8  text-start">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
//           Get in Touch
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Have a question or want to work together? We'd love to hear from you!
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Your name"
//                   required
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="your@email.com"
//                   required
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   placeholder="Your message here..."
//                   required
//                   className="mt-1"
//                   rows={5}
//                 />
//               </div>
//               <div>
//                 <Button
//                   type="submit"
//                   className="w-full flex items-center justify-center text-white font-semibold"
//                 >
//                   <Send className="mr-2 h-4 w-4" /> Send Message
//                 </Button>
//               </div>
//             </form>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <h3 className="text-lg text-gray-900 mb-4 font-semibold">
//                 Contact Information
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <Phone className="h-5 w-5 text-gray-400 mr-2" />
//                   <span>+91 766 645 1946</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="h-5 w-5 text-gray-400 mr-2" />
//                   <a
//                     href="mailto:contact@botmakerstech.in"
//                     className="text-blue-600 hover:underline"
//                   >
//                     contact@botmakerstech.in
//                   </a>
//                 </div>
//                 <div className="flex items-start">
//                   <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
//                   <address className="not-italic">
//                     Sr no 80, Ganranj Mangal Karyalay, Manik Padma Smruti,
//                     <br /> Plot no 13, near Ness Digital Engineering, Lalit
//                     Estate,
//                     <br /> Baner, Pune, Maharashtra 411045
//                   </address>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-lg font-medium text-gray-900 mb-4">
//                 Our Location
//               </h3>
//               <div className="aspect-w-16 aspect-h-9">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54673.05871694681!2d73.77337841849369!3d18.548948794942167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3520496b5f%3A0xee34e55c54da61d2!2sBotMakers!5e0!3m2!1sen!2sus!4v1733826165124!5m2!1sen!2sus"
//                   width="600"
//                   height="450"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="w-full h-full rounded-lg shadow-lg"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify"; // For notifications
import emailjs from "@emailjs/browser";

interface UserInput {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    if (!serviceID || !templateID || !userID) {
      toast.error("Email service configuration is missing. Check environment variables.");
      console.error("Environment variables are not properly configured.");
      return;
    }

    const emailParams = {
      name: userInput.name,
      email: userInput.email,
      message: userInput.message,
    };

    try {
      console.log("Sending email with params:", emailParams);

      const res = await emailjs.send(serviceID, templateID, emailParams, userID);
      console.log("Response from EmailJS:", res);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(`Error: ${res.text || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block font-medium">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInput.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInput.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium">
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={userInput.message}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;