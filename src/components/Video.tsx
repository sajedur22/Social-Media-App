"use client"
import { IKVideo } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type VideoType={
    path:string,
    className?:string

}
const Video = ({path,className}:VideoType) => {
    return (
        <div>
            <IKVideo urlEndpoint={urlEndpoint} path={path} className={className}
                transformation={[{ width: "1920", height: "1080", q:"90" }]}
                controls
            >video</IKVideo>
        </div>
    );
};

export default Video;