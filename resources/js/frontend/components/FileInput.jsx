import { React, useState } from "react";
import CloseBtn from "../../assets/images/modalCloseBtn.png";

export default function FileInput(props) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    function handleSelectedFile(event) {
        var fileArr = Array.from(event.target.files);
        setSelectedFiles(preValue => {
            return [...preValue, ...fileArr];
        });
    }

    function deleteFile(file) {
        setSelectedFiles(selectedFiles.filter(
            (f) => f.name !== file.name
        ));
    }

    const customStyle = {
        cursor: "pointer",
        border: "2px solid #dee2e6",
        padding: "6px",
        borderRadius: "5px",
        fontSize: "11px",
        fontWeight: "bold",
        backgroundColor: "#dee2e6",
    };

    props.fileFunc(selectedFiles);

    return (
        <div className="mb-4 uppercase">
            <label for="file-upload" style={customStyle}>
                <span className="hover:text-blue-600">Choose Files</span>
                <input
                    className="hidden"
                    type="file"
                    name="file"
                    id="file-upload"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleSelectedFile}
                />
            </label>
            {selectedFiles.length !== 0 ? (
                <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    {selectedFiles.map((file) => (
                        <p key={file.name}>
                            {file.name}
                            <button
                                onClick={() => deleteFile(file)}
                                className="bg-red-400 ml-5 w-3 justify-self-end"
                            >
                                <img src={CloseBtn} alt="close-btn-alt" />
                            </button>
                        </p>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}