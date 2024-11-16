import "../globals.css";

export default function Home() {
  return (
      <div className = "interaction">
        <h1 className = "text-4xl p-4">Welcome to Thinkfast!</h1>
        <h1 className = "text-xl p-4">What are your thoughts?</h1>
        <div className="w-[90%] h-[50%] p-4">
          <textarea className="w-[100%] h-[100%] rounded-xl focus-visible:outline-0 p-8 text-black"></textarea>
        </div>
        <button className='h-auto w-auto p-4 border-2 rounded-md pointer-events-auto click'>Submit (Shift + Enter)</button>
      </div>
  );
}
