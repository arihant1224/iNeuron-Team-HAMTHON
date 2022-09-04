import { React, useState } from "react";
import CloseBtn from "../../assets/images/modalCloseBtn.png";

export default function FileInput() {
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

    function handleSubmit(event){
        event.preventDefault();
        var file = selectedFiles[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            axios({
                url: "https://food-predictor-1.cognitiveservices.azure.com/customvision/v3.0/Prediction/9de911cf-d3a9-4321-84d5-c44dd5811243/detect/iterations/Iteration2/image",
                data: reader.result,
                processData: false,
                contentType: "application/octet-stream",
                headers: {
                    'Prediction-key': '085414af5dea4771897e844e79c2a027'
                },
                method: 'POST',
            })
            .then((response) => {
                var l = response.data["predictions"];
                var index, max;
                max = 0;
                index = 0;
                for (var i = 0, _pj_a = l.length; i < _pj_a; i += 1) {
                    if (l[i]["probability"] > max) {
                        max = l[i]["probability"];
                        index = i;
                    }
                }
                var probability =  (l[index].probability * 100).toFixed(2);
                var tagName =  (l[index].tagName);
                var url = "/fetch-result/" + probability + "/" + tagName;
                window.location.href = url;
            });
        }
        reader.readAsArrayBuffer(file);
    }

    return (
        <div className="mb-4 uppercase">
            <form>
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
                    <div>
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
                        <button onClick={handleSubmit}>
                            Upload
                        </button>
                    </div>
                ) : (
                    <div></div>
                )}
            </form>
        </div>
    );
}