import loader from "/LoaderS.gif";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
        <img  src={loader} alt="" />
    </div>
  )
}

export default Loading