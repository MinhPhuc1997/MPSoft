import * as React from "react";
import AnimatedStroke from "./AnimatedStroke";
import Animated from "react-native-reanimated";

const home = ["M12.459 1.66059C12.3259 1.55684 12.162 1.50049 11.9933 1.50049C11.8245 1.50049 11.6606 1.55684 11.5275 1.66059L0.75 10.0643L1.68225 11.2433L3 10.2158V19.5001C3.00079 19.8977 3.15908 20.2787 3.44022 20.5599C3.72135 20.841 4.10242 20.9993 4.5 21.0001H19.5C19.8976 20.9993 20.2787 20.841 20.5598 20.5599C20.8409 20.2787 20.9992 19.8977 21 19.5001V10.2226L22.3177 11.2501L23.25 10.0711L12.459 1.66059ZM13.5 19.5001H10.5V13.5001H13.5V19.5001ZM15 19.5001V13.5001C14.9996 13.1024 14.8414 12.7211 14.5602 12.4399C14.279 12.1587 13.8977 12.0005 13.5 12.0001H10.5C10.1023 12.0005 9.721 12.1587 9.43978 12.4399C9.15856 12.7211 9.0004 13.1024 9 13.5001V19.5001H4.5V9.04659L12 3.20409L19.5 9.05409V19.5001H15Z",]
const list = ["M7.5 17.25C7.5 17.0511 7.57902 16.8603 7.71967 16.7197C7.86032 16.579 8.05109 16.5 8.25 16.5H21.75C21.9489 16.5 22.1397 16.579 22.2803 16.7197C22.421 16.8603 22.5 17.0511 22.5 17.25C22.5 17.4489 22.421 17.6397 22.2803 17.7803C22.1397 17.921 21.9489 18 21.75 18H8.25C8.05109 18 7.86032 17.921 7.71967 17.7803C7.57902 17.6397 7.5 17.4489 7.5 17.25ZM7.5 11.25C7.5 11.0511 7.57902 10.8603 7.71967 10.7197C7.86032 10.579 8.05109 10.5 8.25 10.5H21.75C21.9489 10.5 22.1397 10.579 22.2803 10.7197C22.421 10.8603 22.5 11.0511 22.5 11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12H8.25C8.05109 12 7.86032 11.921 7.71967 11.7803C7.57902 11.6397 7.5 11.4489 7.5 11.25ZM7.5 5.25C7.5 5.05109 7.57902 4.86032 7.71967 4.71967C7.86032 4.57902 8.05109 4.5 8.25 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25C22.5 5.44891 22.421 5.63968 22.2803 5.78033C22.1397 5.92098 21.9489 6 21.75 6H8.25C8.05109 6 7.86032 5.92098 7.71967 5.78033C7.57902 5.63968 7.5 5.44891 7.5 5.25ZM3 6.75C3.39782 6.75 3.77936 6.59196 4.06066 6.31066C4.34196 6.02936 4.5 5.64782 4.5 5.25C4.5 4.85218 4.34196 4.47064 4.06066 4.18934C3.77936 3.90804 3.39782 3.75 3 3.75C2.60218 3.75 2.22064 3.90804 1.93934 4.18934C1.65804 4.47064 1.5 4.85218 1.5 5.25C1.5 5.64782 1.65804 6.02936 1.93934 6.31066C2.22064 6.59196 2.60218 6.75 3 6.75V6.75ZM3 12.75C3.39782 12.75 3.77936 12.592 4.06066 12.3107C4.34196 12.0294 4.5 11.6478 4.5 11.25C4.5 10.8522 4.34196 10.4706 4.06066 10.1893C3.77936 9.90804 3.39782 9.75 3 9.75C2.60218 9.75 2.22064 9.90804 1.93934 10.1893C1.65804 10.4706 1.5 10.8522 1.5 11.25C1.5 11.6478 1.65804 12.0294 1.93934 12.3107C2.22064 12.592 2.60218 12.75 3 12.75V12.75ZM3 18.75C3.39782 18.75 3.77936 18.592 4.06066 18.3107C4.34196 18.0294 4.5 17.6478 4.5 17.25C4.5 16.8522 4.34196 16.4706 4.06066 16.1893C3.77936 15.908 3.39782 15.75 3 15.75C2.60218 15.75 2.22064 15.908 1.93934 16.1893C1.65804 16.4706 1.5 16.8522 1.5 17.25C1.5 17.6478 1.65804 18.0294 1.93934 18.3107C2.22064 18.592 2.60218 18.75 3 18.75V18.75Z"];
const dashboard = ["M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z"];
const notication = [
    "M11.9999 22.8535C12.4199 22.8438 12.8229 22.6859 13.1377 22.4078C13.4524 22.1296 13.6587 21.7491 13.7199 21.3335H10.2133C10.2762 21.7604 10.4921 22.1498 10.8208 22.4294C11.1494 22.709 11.5685 22.8597 11.9999 22.8535V22.8535Z",
    "M21.6734 18.5536C21.0305 17.9805 20.4677 17.3235 20.0001 16.6003C19.4895 15.602 19.1836 14.5117 19.1001 13.3936V10.1003C19.0973 9.70023 19.0617 9.3011 18.9934 8.90693C18.4687 8.80204 17.9644 8.61293 17.5001 8.34693C17.677 8.91682 17.7669 9.51018 17.7667 10.1069V13.4003C17.8484 14.7643 18.2236 16.0946 18.8667 17.3003C19.327 18.0296 19.8731 18.7011 20.4934 19.3003H3.42005C4.04033 18.7011 4.58645 18.0296 5.04672 17.3003C5.68979 16.0946 6.06501 14.7643 6.14672 13.4003V10.1003C6.14321 9.32872 6.29193 8.56406 6.58435 7.85007C6.87677 7.13609 7.30716 6.48679 7.85086 5.93937C8.39457 5.39195 9.04092 4.95715 9.7529 4.65987C10.4649 4.36259 11.2285 4.20867 12.0001 4.20693C13.1292 4.20783 14.2331 4.54176 15.1734 5.16693C15.0697 4.78625 15.0115 4.39463 15.0001 4.00026V3.58026C14.304 3.23783 13.5561 3.01259 12.7867 2.91359V2.07359C12.7867 1.83755 12.693 1.61118 12.526 1.44427C12.3591 1.27736 12.1328 1.18359 11.8967 1.18359C11.6607 1.18359 11.4343 1.27736 11.2674 1.44427C11.1005 1.61118 11.0067 1.83755 11.0067 2.07359V2.94693C9.28386 3.18996 7.7071 4.04809 6.56753 5.36288C5.42796 6.67767 4.80254 8.36035 4.80672 10.1003V13.3936C4.72322 14.5117 4.41724 15.602 3.90672 16.6003C3.44731 17.3218 2.89352 17.9788 2.26005 18.5536C2.18894 18.6161 2.13195 18.693 2.09286 18.7792C2.05378 18.8654 2.03351 18.9589 2.03339 19.0536V19.9603C2.03339 20.1371 2.10362 20.3066 2.22865 20.4317C2.35367 20.5567 2.52324 20.6269 2.70005 20.6269H21.2334C21.4102 20.6269 21.5798 20.5567 21.7048 20.4317C21.8298 20.3066 21.9001 20.1371 21.9001 19.9603V19.0536C21.8999 18.9589 21.8797 18.8654 21.8406 18.7792C21.8015 18.693 21.7445 18.6161 21.6734 18.5536V18.5536Z",
    "M20 7.33317C21.8409 7.33317 23.3333 5.84079 23.3333 3.99984C23.3333 2.15889 21.8409 0.666504 20 0.666504C18.159 0.666504 16.6666 2.15889 16.6666 3.99984C16.6666 5.84079 18.159 7.33317 20 7.33317Z",
]
const setting = [
    "M12.0667 7.3335C9.46666 7.3335 7.39999 9.40016 7.39999 12.0002C7.39999 14.6002 9.46666 16.6668 12.0667 16.6668C14.6667 16.6668 16.7333 14.6002 16.7333 12.0002C16.7333 9.40016 14.6667 7.3335 12.0667 7.3335ZM12.0667 15.3335C10.2 15.3335 8.73333 13.8668 8.73333 12.0002C8.73333 10.1335 10.2 8.66683 12.0667 8.66683C13.9333 8.66683 15.4 10.1335 15.4 12.0002C15.4 13.8668 13.9333 15.3335 12.0667 15.3335Z",
    "M21.8667 9.80016L20 9.20016L19.6 8.20016L20.5333 6.46683C20.7333 6.06683 20.6667 5.5335 20.3333 5.20016L18.7333 3.60016C18.4 3.26683 17.8667 3.20016 17.4667 3.40016L15.7333 4.3335L14.7333 3.9335L14.1333 2.06683C14 1.66683 13.6 1.3335 13.1333 1.3335H10.8667C10.4 1.3335 10 1.66683 9.93334 2.1335L9.33334 4.00016C8.93334 4.06683 8.60001 4.20016 8.26668 4.40016L6.53334 3.46683C6.13334 3.26683 5.60001 3.3335 5.26668 3.66683L3.66668 5.26683C3.33334 5.60016 3.26668 6.1335 3.46668 6.5335L4.33334 8.20016C4.20001 8.5335 4.06668 8.9335 3.93334 9.26683L2.06668 9.86683C1.66668 10.0002 1.33334 10.4002 1.33334 10.8668V13.1335C1.33334 13.6002 1.66668 14.0002 2.13334 14.1335L4.00001 14.7335L4.40001 15.7335L3.46668 17.4668C3.26668 17.8668 3.33334 18.4002 3.66668 18.7335L5.26668 20.3335C5.60001 20.6668 6.13334 20.7335 6.53334 20.5335L8.26668 19.6002L9.26668 20.0002L9.86668 21.9335C10 22.3335 10.4 22.6668 10.8667 22.6668H13.1333C13.6 22.6668 14 22.3335 14.1333 21.9335L14.7333 20.0002L15.7333 19.6002L17.4667 20.5335C17.8667 20.7335 18.4 20.6668 18.7333 20.3335L20.3333 18.7335C20.6667 18.4002 20.7333 17.8668 20.5333 17.4668L19.6 15.7335L20 14.7335L21.9333 14.1335C22.3333 14.0002 22.6667 13.6002 22.6667 13.1335V10.8668C22.6667 10.4002 22.3333 9.9335 21.8667 9.80016V9.80016ZM21.3333 12.9335L18.9333 13.6668L18.8667 14.0002L18.2667 15.4002L18.0667 15.7335L19.2667 17.9335L17.9333 19.2668L15.7333 18.0668L15.4 18.2668C14.9333 18.5335 14.4667 18.7335 14 18.8668L13.6667 18.9335L12.9333 21.3335H11.0667L10.3333 18.9335L10 18.8668L8.60001 18.2668L8.26668 18.0668L6.06668 19.2668L4.73334 17.9335L5.93334 15.7335L5.73334 15.4002C5.46668 14.9335 5.26668 14.4668 5.13334 14.0002L5.06668 13.6668L2.66668 12.9335V11.0668L4.93334 10.4002L5.06668 10.0668C5.20001 9.5335 5.40001 9.06683 5.66668 8.60016L5.86668 8.26683L4.73334 6.06683L6.06668 4.7335L8.20001 5.9335L8.53334 5.7335C9.00001 5.46683 9.46668 5.26683 10 5.1335L10.3333 5.00016L11.0667 2.66683H12.9333L13.6667 5.00016L14 5.1335C14.4667 5.26683 14.9333 5.46683 15.4 5.7335L15.7333 5.9335L17.9333 4.7335L19.2667 6.06683L18.0667 8.26683L18.2667 8.60016C18.5333 9.06683 18.7333 9.5335 18.8667 10.0002L18.9333 10.3335L21.3333 11.0668V12.9335V12.9335Z",
]

interface ItemTabbar {
    index: number;
    progress: Animated.SharedValue<number>;
    StrokeColor: string;
}

const render = (object, progress, StrokeColor) => {
    return (
        <>
            {object.map((d, key) => (<AnimatedStroke d={d} progress={progress} key={key} StrokeColor={StrokeColor} />))}
        </>
    )
}

const ItemTabbar = ({ index, progress, StrokeColor }: ItemTabbar) => {
    switch (index) {
        case 0: return render(home, progress, StrokeColor);
        case 1: return render(list, progress, StrokeColor);
        case 2: return render(dashboard, progress, StrokeColor);
        case 3: return render(notication, progress, StrokeColor);
        case 4: return render(setting, progress, StrokeColor);
        default: return (<></>);
    }

}

export default ItemTabbar;