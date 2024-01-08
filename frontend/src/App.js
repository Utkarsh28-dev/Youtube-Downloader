import axios from "axios";
import React, { useState } from "react";
import logo from "./assets/ytlogo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {


    const [urlValue, setUrlValue] = useState("");
    const [data, setData] = useState(null);

    const handleDownload = async () => {
        const data = await axios.get(
            `http://localhost:4000/download?url=${urlValue}`
        );
        setData(data);
        setUrlValue("");
    };

    return (
        <div className="main">
            <div class="px-4 py-4 my-5 text-center">
                <img class="d-block mx-auto mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Mykaxuxz66OBhOY6WxYvCC1sWN1gWBYFWA&usqp=CAU" alt="" width="100" height="85" />
                <h1 class="display-5 fw-bold">Hey, I am there to help you :)</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Access our YouTube video downloads here. Quickly convert and save your favorite videos hassle-free. Enjoy offline viewing with our user-friendly platform. Get started now for an enhanced experience.</p>

                    <div className="flex">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                placeholder="Enter URL"
                                value={urlValue}
                                onChange={(e) => setUrlValue(e.target.value)}
                                className="form-control outline-none p-2 rounded-md"
                            />
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleDownload}
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    {data !== null ? (
                        <div>
                            <div className="my-4">
                                <iframe
                                    width="570"
                                    height="320"
                                    src={`${data.data.url}`}
                                    title="video"
                                />
                            </div>
                            <div>
                                {data?.data.info.map((formatName, index) => (
                                    <div key={index}>
                                        <a
                                            href={formatName.url}
                                            target="_blank"
                                            download
                                            className=" outline-none italic underline" rel="noreferrer"
                                        >
                                            {formatName.mimeType.split(";")[0] + "  "}
                                            {formatName.hasVideo ? formatName.height + "p" : ""}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className=" text-red-700 font-bold mt-10">No download yet</div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default App
