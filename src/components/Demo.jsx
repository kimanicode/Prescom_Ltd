
const Demo = () => {
  return (
    <div className='bg-myBlue w-full text-white py-6  text-center'>
        <p className="font-bold text-cyan-400  text-3xl md:text-4xl">Request Quotation</p>
        <p className="text-sm  font-light py-3">Ask us many questions to establish  <br />whether we are the best fit.</p>

        <div className="py-8 flex md:flex-row flex-col  md:gap-0 gap-2 justify-center md:w-1/2   m-auto px-6 max-md:w-3/4 ">
            <input type="email" name="" id=""  placeholder=" Karaba.dev@gmail.com "  className="p-3 w-full border-2 border-cyan-400 "/>
            <button className="p-3 bg-green-500  hover:bg-green-400  max-md:m-auto ">Get quotation</button>
        </div>

    </div>
  )
}

export default Demo