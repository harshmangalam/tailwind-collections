import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import FeatureButton from "../../components/facebook/create-post/FeatureButton";
import Avatar from "../../components/facebook/create-post/Avatar";
export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* create post card  */}
      <div className="min-h-screen grid place-items-center bg-gray-100">
        <div className="p-4 md:p-6 shadow-md bg-white rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Avatar />
            </div>
            <div
              className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <h3 className="md:text-lg text-gray-500">
                What`s on your mind, Harsh ?
              </h3>
            </div>
          </div>
          <hr className="mt-3 mb-3" />
          <div className="grid grid-cols-3 gap-1">
            <FeatureButton text="Live video" imageBgPosition="0px 0px" />
            <FeatureButton text="Photo/Video" imageBgPosition="0px -225px" />
            <FeatureButton
              text="Feeling/Activity"
              imageBgPosition="0px -25px"
            />
          </div>
        </div>
      </div>

      {/* create post dialog  */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          {/* dialog overlay  */}
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
          {/* dialog card  */}
          <div className="relative bg-white w-96 rounded-lg">
            {/* dialog header  */}
            <div className="flex justify-center relative border-b">
              {/* dialog title  */}
              <Dialog.Title className=" py-4 text-xl font-bold">
                Create Post
              </Dialog.Title>
              {/* dialog close icon button  */}
              <div className="absolute right-0 p-2">
                <button
                  className="bg-gray-200 p-2 hover:bg-gray-300 rounded-full text-gray-500"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* dialog body  */}
            <Dialog.Description>
              {/* post author profile */}
              <div className="my-2 px-4 flex items-center space-x-2">
                <Avatar />

                <div>
                  <h6 className="font-bold text-sm">Harsh Mangalam</h6>
                  {/* author friends dropdown  */}

                  <div className="flex items-center space-x-2 bg-gray-300 font-bold px-2 py-1 rounded-lg cursor-pointer">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/8jU_V36aE1u.png"
                      alt="Harsh`s friends"
                      className="h-3 w-3"
                    />
                    <span className="text-sm">Friends</span>
                    <i
                      style={{
                        backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eU_DXmSX2-Q.png")`,
                        backgroundPosition: "-60px -166px",
                        backgroundSize: "189px 183px",
                      }}
                      className="w-3 h-3 bg-no-repeat inline-block"
                    ></i>
                  </div>
                </div>
              </div>

              {/* create post interface */}
              <div className="px-4 py-2">
                <div className="mb-4">
                  <textarea
                    className="w-full placeholder-gray-700 text-xl focus:outline-none"
                    rows="6"
                    placeholder="What`s on your mind Harsh ?"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-9"
                      src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                      alt="image pallete"
                    />
                  </div>
                  <div>
                    <span>
                      <i
                        className="bg-no-repeat inline-block bg-auto w-6 h-6 "
                        style={{
                          backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/52gJ5vOc-Eq.png")`,
                          backgroundPosition: "0px -207px",
                        }}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-2 px-4">
                <button className="text-center w-full py-2 rounded-lg bg-blue-500 text-white" disabled>
                  Post
                </button>
              </div>
            </Dialog.Description>
          </div>
        </div>
      </Dialog>
    </>
  );
}
