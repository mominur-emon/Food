import React from "react";

const HeadLineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Bogo's Out </p>
          <p className="p-2 ">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 cursor-pointer hover:bg-orange-600 hover:border-orange-600 hover:text-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="/"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants </p>
          <p className="p-2 ">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 cursor-pointer hover:bg-orange-600 hover:border-orange-600 hover:text-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/6879452/pexels-photo-6879452.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="/"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full  bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Cakes</p>
          <p className="p-2 ">Testy Treat's</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 cursor-pointer hover:bg-orange-600 hover:border-orange-600 hover:text-white">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadLineCards;
