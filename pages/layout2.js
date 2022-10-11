export default function layout2() {
  return (
    <>
      <div className="w-screen h-screen flex gap-3">
        <div className="bg-purple-400 w-1/3 h-full"></div>
        <div className="w-2/3 h-full flex flex-col gap-3">
          <div className="h-1/4 bg-purple-400"></div>
          <div className="h-3/4 flex gap-3">
            <div className="bg-purple-400 w-full h-full"></div>
            <div className="bg-purple-400 w-full h-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}
