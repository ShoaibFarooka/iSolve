import React, { useEffect, useRef, useState } from "react";
import "../style/transitions.css";
import "../style/fontsize.css";

const RBTL = () => {
  const svgRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          const scrollPosition = window.scrollY || window.pageYOffset;
          const rotationAngle = scrollPosition / 10;

          setRotation(rotationAngle);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid w-100 flex justify-center items-center">
      <div className="container-fluid w-[100%] flex flex-col p-6 md:p-10 lg:p-16 max-w-[1700px]">
        <h2 className="text-3xl lg:text-5xl text-[white] font-sans">
          We like to <span className="text-[#15B1FE] ">read</span> between the{" "}
          <span className="text-[#15B1FE] ">lines.</span>
        </h2>
        <div className="relative flex justify-end">
          <div className="w-[0%] lg:w-[20%] ">
            <svg
              width="500"
              height="500"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-5 left-5 w-[25%] z-0"
              ref={svgRef}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M499.499 217.404L499.501 227.646L499.515 227.633L499.535 240.492L499.794 240.488V262.622H499.56L499.585 278.542L499.601 288.772L337.999 288.518C323.493 288.481 310.499 286.935 292.176 280.802C290.951 280.346 289.727 279.891 288.531 279.49C288.44 279.463 288.348 279.439 288.254 279.413C288.104 279.374 287.953 279.334 287.801 279.283C286.852 278.993 285.945 278.771 285.064 278.604L284.802 278.55C284.53 278.492 284.247 278.431 284.019 278.41C283.923 278.397 283.827 278.383 283.716 278.383C283.708 278.383 283.698 278.382 283.687 278.381C283.675 278.38 283.662 278.378 283.648 278.375L283.607 278.369C283.59 278.366 283.575 278.363 283.559 278.361C283.548 278.36 283.537 278.358 283.527 278.357L283.496 278.355L283.455 278.396C283.084 278.382 282.699 278.381 282.273 278.449C277.751 279.006 277.84 282.938 279.139 287.422L279.332 288.055C279.435 288.404 279.554 288.754 279.677 289.115L279.802 289.486L280.437 291.246L280.537 291.513L280.61 291.707C280.669 291.862 280.727 292.016 280.782 292.168C280.789 292.202 280.799 292.234 280.81 292.264L280.827 292.317L280.837 292.36L280.907 292.567C286.929 310.669 288.462 323.569 288.484 337.977L288.738 499.579L278.509 499.563L263.439 499.54V499.767H243.677L243.673 499.51L227.602 499.485L217.373 499.469L217.119 337.866C217.11 323.361 218.616 310.372 224.692 292.068C225.143 290.845 225.596 289.622 225.993 288.426C226.008 288.371 226.024 288.315 226.039 288.258C226.049 288.222 226.058 288.187 226.068 288.15C226.107 288.001 226.147 287.849 226.198 287.698C226.484 286.75 226.703 285.843 226.867 284.963L226.921 284.701C226.978 284.428 227.037 284.146 227.057 283.919C227.072 283.822 227.085 283.726 227.085 283.616C227.084 283.589 227.092 283.547 227.099 283.506L227.106 283.457L227.11 283.421L227.112 283.396L227.071 283.354C227.084 282.984 227.083 282.598 227.013 282.172C226.443 277.648 222.511 277.725 218.031 279.01L217.398 279.201C217.049 279.304 216.7 279.421 216.34 279.542L215.969 279.666L214.21 280.296C214.06 280.351 213.905 280.409 213.751 280.467L213.543 280.545L213.29 280.638L213.275 280.642L213.241 280.651L213.194 280.666L213.134 280.684L213.098 280.693L212.892 280.761C194.807 286.728 181.913 288.219 167.505 288.197L5.90273 287.943L5.88668 277.714L5.8494 253.967L5.74277 253.927L5.84922 253.856L5.84677 252.291H5.82276L5.78281 226.856L5.76676 216.627L167.383 216.812C181.888 216.848 194.883 218.395 213.205 224.528C214.429 224.984 215.654 225.44 216.851 225.84L216.99 225.88L217.128 225.916C217.277 225.956 217.428 225.997 217.58 226.048C218.529 226.338 219.437 226.559 220.317 226.725L220.58 226.781C220.852 226.838 221.134 226.898 221.362 226.919C221.458 226.934 221.554 226.948 221.665 226.948C221.693 226.948 221.734 226.954 221.775 226.961C221.816 226.969 221.857 226.975 221.885 226.975L221.926 226.934C222.297 226.948 222.682 226.949 223.108 226.881C227.631 226.325 227.542 222.392 226.243 217.908L226.049 217.275C225.946 216.926 225.828 216.577 225.705 216.216L225.579 215.845L224.944 214.084C224.906 213.979 224.866 213.872 224.825 213.765L224.772 213.623C224.713 213.469 224.654 213.313 224.599 213.162C224.585 213.093 224.557 213.039 224.544 212.969L224.475 212.763C218.452 194.66 216.919 181.762 216.897 167.353L216.643 5.75085L226.872 5.7944L244.464 5.81251L244.469 5.71448H262.649L262.651 5.83259L277.731 5.8481L287.96 5.86417L288.282 167.481C288.291 181.985 286.785 194.975 280.71 213.279C280.258 214.502 279.806 215.725 279.409 216.921C279.383 217.01 279.358 217.103 279.334 217.197C279.295 217.345 279.254 217.498 279.204 217.649C278.917 218.597 278.699 219.504 278.535 220.384L278.481 220.646C278.424 220.919 278.364 221.201 278.344 221.428C278.331 221.525 278.316 221.621 278.317 221.731L278.315 221.76C278.313 221.784 278.308 221.813 278.304 221.841L278.293 221.905C278.291 221.922 278.29 221.938 278.29 221.951L278.331 221.992C278.318 222.363 278.319 222.748 278.388 223.175C278.959 227.698 282.891 227.622 287.371 226.337L288.003 226.145C288.351 226.043 288.7 225.926 289.06 225.805L289.432 225.681L291.191 225.051C291.264 225.024 291.339 224.997 291.413 224.969C291.491 224.94 291.569 224.91 291.648 224.881C291.803 224.822 291.96 224.763 292.112 224.708C292.138 224.703 292.163 224.696 292.187 224.688C292.193 224.686 292.201 224.684 292.207 224.681L292.24 224.671C292.26 224.664 292.281 224.658 292.304 224.654L292.51 224.585C310.594 218.619 323.488 217.127 337.896 217.15L499.499 217.404ZM267.838 228.863L276.473 228.879L276.496 243.537H276.509L276.486 228.878L267.838 228.863ZM276.553 269.341L276.537 269.343L276.548 276.529H276.564L276.553 269.341ZM240.619 276.479L228.916 276.46V276.469L240.619 276.488V276.479Z"
                fill="#27B3FB"
              />
            </svg>
          </div>
          <div className="relative  z-1 border border-[#15B1FE] mt-16 rounded-xl w-[100%] lg:w-[80%] p-4 md:p-10 lg:p-16 bg-slate-900">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row gap-10 border-b border-b-[#15B1FE] pb-10 w-100">
                <div className="flex flex-col w-[100%] md:w-[50%]">
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-white">
                    Unlock your business's potential with our creative
                    solutions.
                  </h3>
                  <p className="text-md md:text-lg my-6 md:my-10 lg:my-16 text-[#ACACAC]">
                    At Itsolve, we believe in the power of creativity to
                    transform businesses. Our team of skilled professionals is
                    dedicated to unlocking the true potential of your business
                    through our innovative solutions.
                  </p>
                </div>
                <div className="border border-[#15B1FE] rounded-lg w-[100%] md:w-[50%] min-h-[200px]">
                  <img src="" alt="pic" className="w-100" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-10 pt-16">
                <div className="flex flex-col w-[100%] md:w-[50%] ">
                  <h3 className="text-xl md:text-2xl lg:text-3xl text-white">
                    Experience excellence through our seamless service journey.
                  </h3>
                  <p className="text-md md:text-lg my-6 md:my-10 lg:my-16 text-[#ACACAC]">
                    At Itsolve, we strive for excellence in every aspect of our
                    service journey. From the moment you create a ticket on our
                    website to the final delivery of your project, we ensure a
                    seamless and hassle-free experience.
                  </p>
                </div>
                <div className="border border-[#15B1FE] rounded-lg w-[100%] md:w-[50%] min-h-[200px]">
                  <img src="" alt="pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RBTL;
