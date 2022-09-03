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
        const formData = new FormData();
        formData.append("picture", image);
        try {
            const response = axios({
                method: "post",
                url: "/upload-picture",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            response.then((r) => {
                console.log(r.data);
            });
        }catch(error) {
            console.log(error)
        }
    }

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