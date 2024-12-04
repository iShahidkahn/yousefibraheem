import React, { useState } from "react";

const ChooseLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    return (
        <div
            className="relative w-full h-[1080px] min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('images/background.png')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-95"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center h-full text-center text-white space-y-6">
                {/* Logo */}
                <div className="flex flex-col items-center space-y-2">
                    <img
                        src="images/person.png"
                        alt="Logo"
                    />
                </div>
                <div className="absolute top-[350px]">
                    <h2 className="text-lg font-medium mb-10 gilory-bold">
                        Choose your language
                    </h2>
                    <div className="flex space-x-6">
                        <div
                            className={`flex flex-col items-center cursor-pointer ${selectedLanguage === "English" ? "opacity-100" : "opacity-50"
                                } hover:opacity-100`}
                            onClick={() => setSelectedLanguage("English")}
                        >
                            <img
                                src="images/english.png"
                                alt="English"
                            />
                            <span className="mt-2 text-sm gilory-bold">English</span>
                        </div>
                        <div
                            className={`flex flex-col items-center cursor-pointer ${selectedLanguage === "Arabic" ? "opacity-100" : "opacity-50"
                                } hover:opacity-100`}
                            onClick={() => setSelectedLanguage("Arabic")}
                        >
                            <img
                                src="images/arabi.png"
                                alt="Arabic"
                            />
                            <span className="mt-2 text-sm gilory-bold">العربية</span>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[100px]">
                    <div className="button-container mb-6">
                        <button className="attention-button">Attention</button>
                    </div>
                    {/* Footer */}
                    <p className="text-base gilory-regular">
                        You can change the language either by user settings or{" "}
                        <span className="gilory-bold">/language</span> command
                    </p>
                    <p className="text-base gilory-regular">
                        يمكنك تغيير اللغة إما عبر الإعدادات أو أمر{" "}
                        <span className="gilory-bold">/language</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChooseLanguage;
