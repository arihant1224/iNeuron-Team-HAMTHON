import { React, useState } from "react";

export default function Gallery(){
    const [videoLink, setVideoLink] = useState("");
    var rootPath = "";

    if (imageTag == "bhindi masala"){
        rootPath = "/images/uploads/bhindi_masala/";
    }else if (imageTag == "basundi"){
        rootPath = "/images/uploads/basundi/";
    }else if (imageTag == "butter chicken"){
        rootPath = "/images/uploads/butter_chicken/";
    }else if (imageTag == "poha"){
        rootPath = "/images/uploads/poha/";
    }else if (imageTag == "gulab jamun"){
        rootPath = "/images/uploads/gulab_jamun/";
    }

    return (
        <div className="ml-5 mt-4 mb-5">
            <h1 className="font-bold text-2xl mb-2 underline">Image Search Results</h1>
            <section class="text-gray-600 body-font mb-5">
                <div class="container px-5 mx-auto mt-5">
                    <div class="flex flex-wrap -m-4">
                        {imageArr.map((img) => {
                            {videoLink == "" ? setVideoLink(img.video_link) : null}
                            return (
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={rootPath + img.image_url} />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <div className="ml-12 pl-10 pt-4 mt-5 mb-5">
                <h1 className="font-bold text-2xl mb-4 underline">Related Video</h1>
                <iframe width="750" height="500" src={videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}