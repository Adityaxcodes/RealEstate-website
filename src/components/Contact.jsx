import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1aa97c67-e15a-4c72-8a12-9d55daaabf3e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Send Message");
      event.target.reset();
      toast.success("Form submitted Successfully")
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("There is a error")
    }
  };    
    
  return (
    <div id='Contact' className='px-6 py-10 scroll-smooth'>
        <div className='flex flex-col items-center mt text-center'>
            <h1 className='text-4xl md:text-6xl font-bold'>Contact <span className='font-thin underline underline-offset-4'>with Us</span></h1>
            <p className='mt-8 w-full md:w-[300px]'>Ready to Make a Move? Let's Build Your Future Together</p>
        </div>

        {/* -------------------Contact Info form-------------------------- */}
        <form className='mt-[50px] flex flex-col items-center px-4' onSubmit={onSubmit}>
            <div className='flex flex-col md:flex-row w-full justify-center gap-8 md:gap-[200px]' id='inputs'>
                <div className='flex flex-col justify-start gap-3 w-full md:w-auto'>Your Name
                    <input type="text" name="name" placeholder='Enter Your Name'
                    className='border-[4px] outline-black px-4 py-2 md:px-10 md:py-4 w-full md:w-auto' required/>
                </div>
                <div className='flex flex-col justify-start gap-3 w-full md:w-auto'>Your Number
                    <input type="tel" name="number" placeholder='Enter Your Number'
                    className='border-[4px] outline-black px-4 py-2 md:px-10 md:py-4 w-full md:w-auto' required/>
                </div>
            </div>
            <div className='flex flex-col items-center mt-[20px] gap-3 w-full px-4'>
                Message
                <textarea name="message" id="message" 
                className='w-full md:w-[50vw] h-[200px] md:h-[300px] border-[5px]' required></textarea>
            </div>
            <button type="submit" className='bg-gray-500 mt-[50px] px-[30px] py-[10px] md:px-[50px] md:py-[15px] font-medium text-xl md:text-2xl rounded-2xl'>{result ? result : "Send Message"}</button>
        </form>
    </div>
  )
}

export default Contact
