import React from "react";

const ChooseLanguage = () => {
    return (
        <div
            className="relative w-full h-[1080px] min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('images/background.png')`, // Replace with your image path
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-95"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center  h-full text-center text-white space-y-6">
                {/* Logo */}
                <div className="flex flex-col items-center space-y-2">
                    <img
                        src="images/person.png" // Replace with your logo path
                        alt="Logo"
                        className=""
                    />
                </div>
                <div className="absolute top-[350px]">

                    {/* Choose Language */}
                    <h2 className="text-lg font-medium mb-10">Choose your language</h2>
                    <div className="flex space-x-6">
                        {/* English */}
                        <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
                            <img
                                src="images/english.png" // Replace with your US flag image
                                alt="English"
                                className=""
                            />
                            <span className="mt-2 text-sm">English</span>
                        </div>
                        {/* Arabic */}
                        <div className="flex flex-col items-center cursor-pointer hover:opacity-80">
                            <img
                                src="images/arabi.png" // Replace with your Saudi flag image
                                alt="Arabic"
                                className=""
                            />
                            <span className="mt-2 text-sm">العربية</span>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[100px]">
                    {/* ATTENTION Button */}
                    <div class="button-container mb-6">
                        <button class="attention-button">Attention</button>
                    </div>
                    {/* Footer */}
                    <p className="text-xs text-gray-300">
                        You can change the language either by user settings or{" "}
                        <code>/language</code> command
                    </p>
                    <p className="text-xs text-gray-300">
                        يمكنك تغيير اللغة إما عبر الإعدادات أو أمر <code>/language</code>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ChooseLanguage;
