import styled from "styled-components";
import {ReactNode, useRef} from "react";

const VertVideoWrapper = styled.div<{ $width: string; }>`
    width: ${props => props.$width};
    aspect-ratio: 9/16;
    border-radius: 15px;
    overflow: hidden;
    object-fit: scale-down;
    display: block;
    cursor: pointer;
`;
const CenteredVideo = styled.video`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`
// const VertVideo =
const UnHooked = styled.div`
    position: absolute;
    z-index: 100;
`;

export function PortfolioItem({url, width, children}: { url: string, width: string, children?: ReactNode }) {

    const videoRef = useRef<HTMLVideoElement>(null);

    // onClick handler to play the video
    const handlePlayVideo = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause(); // Optionally pause the video if it's already playing
            }
        }
    };

// TODO: implement styling and decide on other items to include in the portfolio item
    return <VertVideoWrapper $width={width} onClick={handlePlayVideo}>
        <UnHooked>{children}</UnHooked>
        <CenteredVideo height={'100%'} ref={videoRef} autoPlay muted loop> {/* muted and loop are optional */}
            <source src={url} type="video/mp4"/>
        </CenteredVideo>
    </VertVideoWrapper>;
}
