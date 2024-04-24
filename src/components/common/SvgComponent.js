import React, { useEffect, useState } from "react";

const SvgComponent = ({ name }) => {
  // Dynamically import the SVG file
  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const svgModule = await import(`../../assets/svgs/${name}.svg`);
        setSvgContent(svgModule.default);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    fetchSvg();

    return () => {
      // Cleanup function
      setSvgContent(null);
    };
  }, [name]);

  const [svgContent, setSvgContent] = useState(null);

  return (
    <>
      {/* Render SVG directly using dangerouslySetInnerHTML */}
      {svgContent && (
        <img src={svgContent} className="min-h-4  max-h-5"/>
      )}
    </>
  );
};

export default SvgComponent;