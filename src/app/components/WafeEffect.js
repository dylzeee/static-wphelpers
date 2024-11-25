export default function WaveEffect(props) {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 lg:inset-x-[-80px] bottom-0 lg:bottom-[-40px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="w-full"
                >
                    <path
                        fill={props.color}
                        d="M0,320L48,293.3C96,267,192,213,288,202.7C384,192,480,224,576,240C672,256,768,256,864,213.3C960,171,1056,85,1152,80C1248,75,1344,149,1392,186.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        style={{ animation: 'wave-move 8s ease-in-out infinite' }}
                    ></path>
                </svg>
            </div>
        </div>
    );
}