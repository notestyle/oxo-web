export default function Profile() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-24 flex justify-center items-center shadow">
        <h3 className=" font-bold text-gray-700">Profile cards</h3>
      </div>
      <div className="w-full h-full bg-[#E8E8E8] flex justify-evenly pt-8">
        <div className="card">
          <div className="w-60 h-60  mx-auto -mt-4 rounded shadow-lg relative">
            <img
              src="./images/profile1.jpeg"
              alt="profile1"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-2 bottom-2 text-white ">
              John Smith
            </div>
          </div>
          <h3 className=" text-red-500 text-center my-2 text-sm font-bold">
            CEO/Co-Founder
          </h3>
          <p className="text-center font-thin text-sm">
            Launch Canva and search for “Profile Picture.” You may also search
            for “Facebook Profile Frame” and use it for any social media PFP. 2.
          </p>
          <div className="w-full h-full flex justify-center gap-4 my-4">
            <img src="./icons/twitter.png" className="w-4 h-4" />
            <img src="./icons/pinterest.png" className="w-4 h-4" />
            <img src="./icons/instagram.png" className="w-4 h-4" />
          </div>
        </div>
        <div className=" card">
          <div className="w-60 h-60  mx-auto -mt-4 rounded shadow-lg relative">
            <img
              src="./images/profile1.jpeg"
              alt="profile1"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-2 bottom-2 text-white ">
              John Smith
            </div>
          </div>
          <h3 className=" text-red-500 text-center my-2 text-sm font-bold">
            CEO/Co-Founder
          </h3>
          <p className="text-center font-thin text-sm">
            Launch Canva and search for “Profile Picture.” You may also search
            for “Facebook Profile Frame” and use it for any social media PFP. 2.
          </p>
          <div className="w-full h-full flex justify-center gap-4 my-4">
            <img src="./icons/twitter.png" className="w-4 h-4" />
            <img src="./icons/pinterest.png" className="w-4 h-4" />
            <img src="./icons/instagram.png" className="w-4 h-4" />
          </div>
        </div>
        <div className=" card">
          <div className="w-60 h-60  mx-auto -mt-4 rounded shadow-lg relative">
            <img
              src="./images/profile1.jpeg"
              alt="profile1"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-2 bottom-2 text-white ">
              John Smith
            </div>
          </div>
          <h3 className=" text-red-500 text-center my-2 text-sm font-bold">
            CEO/Co-Founder
          </h3>
          <p className="text-center font-thin text-sm">
            Launch Canva and search for “Profile Picture.” You may also search
            for “Facebook Profile Frame” and use it for any social media PFP. 2.
          </p>
          <div className="w-full h-full flex justify-center gap-4 my-4">
            <img src="./icons/twitter.png" className="w-4 h-4" />
            <img src="./icons/pinterest.png" className="w-4 h-4" />
            <img src="./icons/instagram.png" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
