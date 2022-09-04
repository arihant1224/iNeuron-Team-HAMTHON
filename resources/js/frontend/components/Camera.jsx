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
            <button onClick={openCamera}>
                {isOpen ? 
                    "Close Camera"
                    :
                    "Open Camera"
                }
            </button>
            {isOpen ?
                <div>
                    <div>
                        {image == '' ? <Webcam
                            audio={false}
                            height={410}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={410}
                            videoConstraints={videoConstraints}
                        /> : <img src={image} />}
                    </div>
                    <div>
                        {image != '' ?
                            <div>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    setImage('');
                                }}
                                >
                                    Retake Image
                                </button>
                                <button onClick={uploadPicture}>
                                    Upload
                                </button>
                            </div> :
                            <button onClick={(e) => {
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