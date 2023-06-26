import { useState } from "react";

export default function Searchbar() {
    const [open, setOpen] = useState(false);
    const [location, setLocation] = useState("");
    const [showPopup, setShowPopup] = useState(false); // New state for pop-up

    const handleButtonClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleOptionClick = (event) => {
        console.log(event.target);
        console.log(event.target.getAttribute("data-value"));
    };

    const handleInputClick = () => {
        setShowPopup(true); // Show the pop-up when input field is clicked
    };

    const labelOptions = ["hj", "jk", "jk"];

    const labelOption = labelOptions.map((option, index) => (
        <div
            key={index}
            onClick={handleOptionClick}
            className="border-2 w-full"
            data-value={option} // Use custom data attribute for value
        >
            {option}
        </div>
    ));

    return (
        <div className="flex flex-col bg-slate-400 min-h-screen min-w-screen">
            <div className="m-8">
                <input
                    readOnly
                    onClick={handleButtonClick}

                    value={location}
                    className="w-40 border border-gray-300" // Add border classes here
                />
                {open && labelOption}
            </div>
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-white rounded-lg p-4 max-w-3xl">
                        <p>This is the pop-up content.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
