import { React, useState, useRef, useCallback } from 'react';
import Webcam from "react-webcam";
 
const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: "420px",
    height: "400px",
    facingMode: "user"
};
 
export default function Camera(){
    const [image, setImage] = useState('');
    const [isOpen, setCameraState] = useState(false);
    const webcamRef = useRef(null);

    const customStyle = {
        cursor: "pointer",
        border: "2px solid #dee2e6",
        padding: "6px",
        borderRadius: "5px",
        fontSize: "11px",
        fontWeight: "bold",
        backgroundColor: "#dee2e6",
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    });

    function openCamera(){
        setCameraState((preVal) => {
            return !preVal;
        });
    }

    function uploadPicture(event){
        event.preventDefault();
        var file = image;
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
                success: function(response) {
                    var result = response["Predictions"][0];
                    console.log(result);
                },
                error: function(error) {
                    console.log('error: ' + error);
                }
            })
            .then((response) => {
                console.log(response.data["predictions"][0].tagName);
            });
        }
        reader.readAsArrayBuffer(file);
    }

    console.log(image);

    return (
        <div>
            <button className="hover:text-blue-600 mb-2" onClick={openCamera} style={customStyle}>
                {isOpen ? 
                    "CLOSE CAMERA"
                    :
                    "OPEN CAMERA"
                }
            </button>
            {isOpen ?
                <div>
                    <div className="flex justify-center">
                        {image == '' ? <Webcam
                            audio={false}
                            height={510}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={510}
                            videoConstraints={videoConstraints}
                        /> : <img src={image} />}
                    </div>
                    <div>
                        {image != '' ?
                            <div>
                                <button
                                className="ml-3 bg-gray-300 py-2 px-3 mt-2 rounded-md text-red-700 hover:text-red-500 text-sm font-bold"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setImage('');
                                }}
                                >
                                    Retake Image
                                </button>
                                <button className="ml-3 bg-gray-300 py-2 px-3 mt-2 rounded-md text-blue-700 hover:text-blue-500 text-sm font-bold" onClick={uploadPicture}>
                                    Upload
                                </button>
                            </div> :
                            <button
                            className="ml-3 bg-gray-300 py-2 px-3 mt-2 rounded-md text-green-700 hover:text-green-500 text-sm font-bold"
                            onClick={(e) => {
                                e.preventDefault();
                                capture();
                            }}
                            >
                                Capture
                            </button>
                        }
                    </div>
                </div>
                :
                null
            }
        </div>
    );
};