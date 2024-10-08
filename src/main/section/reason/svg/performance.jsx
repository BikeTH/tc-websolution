import React, { useState, useRef, useEffect } from 'react';
import "../reasonContent.css";

export default function UserExperienceIllustration() {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const strokeWidth = 2;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
                    setIsVisible(true);
                }
            },
            {
                threshold: [0.8]
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            animatedTextPWA('animatedTextPWA', 0, 100, 3000);
        }
    }, [isVisible]);

    function animatedTextPWA(elementId, startValue, endValue, duration) {
        const element = document.getElementById(elementId);
        let startTime;
    
        function exponentialGrowth(t) {
            return startValue + (endValue - startValue) * (1 - Math.exp(-t * 5));
        }
    
        function update(time) {
            if (!startTime) startTime = time;
            const elapsed = (time - startTime) / duration;
            if (elapsed < 1) {
                element.textContent = Math.min(Math.round(exponentialGrowth(elapsed)), endValue);
                requestAnimationFrame(update);
            } else {
                element.textContent = endValue;
            }
        }
    
        requestAnimationFrame(update);
    }    

    return (
        <div ref={componentRef} style={{ width: "auto", height: "auto" }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 160"
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                style={{ display: 'block', margin: '0 auto' }} // Center horizontally
            >
                {/* Left Side Icon - First Contentful Paint Box */}
                <g>
                    <rect
                        x="20"
                        y="10"
                        width="124"
                        height="40"
                        rx="12"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="0.5"
                    />
                    <text
                        x="24"
                        y="25"
                        fill="var(--color)"
                        fontSize="5"
                        fontWeight="normal"
                        stroke="none"
                    >
                        FIRST CONTENTFUL PAINT
                    </text>
                    <text
                        x="82"
                        y="44"
                        fill="var(--seo)"
                        fontSize="12"
                        fontWeight="normal"
                        textAnchor="middle"
                        stroke="none"
                    >
                        295 ms
                    </text>
                </g>

                <g>
                    <rect
                        x="0"
                        y="60"
                        width="136"
                        height="40"
                        rx="12"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="0.5"
                    />
                    <text
                        x="4"
                        y="75"
                        fill="var(--color)"
                        fontSize="5"
                        fontWeight="normal"
                        stroke="none"
                    >
                        LARGEST CONTENTFUL PAINT
                    </text>
                    <text
                        x="66"
                        y="94"
                        fill="var(--seo)"
                        fontSize="12"
                        fontWeight="normal"
                        textAnchor="middle"
                        stroke="none"
                    >
                        295 ms
                    </text>
                </g>

                <g>
                    <rect
                        x="24"
                        y="110"
                        width="110"
                        height="40"
                        rx="12"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="0.5"
                    />
                    <text
                        x="32"
                        y="125"
                        fill="var(--color)"
                        fontSize="5"
                        fontWeight="normal"
                        stroke="none"
                    >
                        TIME TO INTERACTIVE
                    </text>
                    <text
                        x="82"
                        y="144"
                        fill="var(--seo)"
                        fontSize="12"
                        fontWeight="normal"
                        textAnchor="middle"
                        stroke="none"
                    >
                        325 ms
                    </text>
                </g>

                {/* Speedometer 1 (Lighthouse Performance) */}
                <g transform="translate(120, 0)">
                    <circle
                        cx="75"
                        cy="75"
                        r="46"
                        stroke="none"
                        fill="var(--background-color)"
                    />
                    <circle
                        cx="75"
                        cy="75"
                        r="46"
                        stroke="var(--seo)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="314"
                        className={isVisible ? 'circle-animation-partial' : 'circle-hidden'}
                        strokeLinecap="round"
                        transform="rotate(-90 75 75)"
                    />
                    <text
                        x="75"
                        y="83"
                        fill="var(--seo)"
                        fontSize="20"
                        fontWeight="bold"
                        textAnchor="middle"
                        className={isVisible ? 'text-animation' : 'text-hidden'}
                        stroke="none"
                    >
                        90+
                    </text>
                    <text
                        x="75"
                        y="140"
                        fill="var(--color)"
                        fontSize="12"
                        fontWeight="bold"
                        textAnchor="middle"
                        className={isVisible ? 'text-animation' : 'text-hidden'}
                        stroke="none"
                    >
                        Performance
                    </text>
                </g>

                {/* Speedometer 2 (PWA Icon) */}
                <g transform="translate(230, 0)">
                    <circle
                        cx="75"
                        cy="75"
                        r="46"
                        stroke="none"
                        fill="var(--background-color)"
                    />
                    <circle
                        cx="75"
                        cy="75"
                        r="46"
                        stroke="var(--seo)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="314"
                        className={isVisible ? 'circle-animation' : 'circle-hidden'}
                        strokeLinecap="round"
                        transform="rotate(-90 75 75)"
                    />
                    <text
                        id="animatedTextPWA"
                        x="75"
                        y="83"
                        fill="var(--seo)"
                        fontSize="20"
                        fontWeight="bold"
                        textAnchor="middle"
                        stroke="none"
                        className={isVisible ? 'text-animation' : 'text-hidden'}
                    >
                        100
                    </text>
                    <text
                        x="75"
                        y="140"
                        fill="var(--color)"
                        fontSize="12"
                        fontWeight="bold"
                        textAnchor="middle"
                        className={isVisible ? 'text-animation' : 'text-hidden'}
                        stroke="none"
                    >
                        PWA
                    </text>
                </g>

                {/* Simplified Tablet, Monitor, and Phone */}
                <g transform="translate(350, 20)">
                    {/* Monitor */}
                    <rect
                        x="30"
                        y="-20"
                        width="100"
                        height="60"
                        rx="8"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="1"
                    />
                    <rect
                        x="68"
                        y="40"
                        width="30"
                        height="6"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="1"
                    />
                    {/* Monitor Plate */}
                    <rect
                        x="58"
                        y="45"
                        width="50"
                        height="4"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="1"
                    />
                    <text
                        x="82"
                        y="0"
                        fontSize="8"
                        fontWeight="600"
                        textAnchor="middle"
                        fill="var(--color)"
                        stroke="none"
                    >
                        CodifyWeb
                    </text>
                    <text
                        x="82"
                        y="10"
                        fontSize="6"
                        fontWeight="600"
                        textAnchor="middle"
                        fill="var(--color)"
                        stroke="none"
                    >
                        Solutions
                    </text>
                    {/* Tablet */}
                    <rect
                        x="10"
                        y="20"
                        width="60"
                        height="80"
                        rx="6"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="1"
                    />
                    {/* Tablet Screen */}
                    <rect
                        x="12"
                        y="22"
                        width="56"
                        height="76"
                        rx="6"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="0.4"
                    />
                    <text
                        x="42"
                        y="52"
                        fontSize="8"
                        fontWeight="600"
                        textAnchor="middle"
                        fill="var(--color)"
                        stroke="none"
                    >
                        Codify
                    </text>
                    <text
                        x="42"
                        y="62"
                        fontSize="6"
                        fontWeight="600"
                        textAnchor="middle"
                        fill="var(--color)"
                        stroke="none"
                    >
                        Web
                    </text>
                    <text
                        x="42"
                        y="70"
                        fontSize="5"
                        fontWeight="600"
                        textAnchor="middle"
                        fill="var(--color)"
                        stroke="none"
                    >
                        Solutions
                    </text>
                    {/* Phone */}
                    <rect
                        x="105" // Decreased by 5 units to move the phone left
                        y="30"
                        width="40"
                        height="60"
                        rx="6"
                        fill="var(--content-bg)"
                        stroke="var(--border)"
                        strokeWidth="1"
                    />
                    {/* Screen */}
                    <rect
                        x="108" // Adjusted to maintain the margin inside the phone body
                        y="32" // Same y-value
                        width="34"
                        height="56"
                        rx="4"
                        fill="var(--background-color)"
                        stroke="var(--border)"
                        strokeWidth="0.3"
                    />
                    {/* SVG Version of the Banner Content */}
                    <text
                        x="126" // Decreased by 5 units to match the shift
                        y="56"
                        fontSize="6"
                        fontWeight="600"
                        textAnchor="middle"
                        fill="var(--color)"
                        stroke="none"
                    >
                        Codify
                    </text>
                    <text
                        x="126" // Decreased by 5 units to match the shift
                        y="68"
                        fontSize="6"
                        fontWeight="600"
                        textAnchor="middle"
                        fill="var(--color)"
                        stroke="none"
                    >
                        Web
                    </text>
                </g>
            </svg>
        </div>
    );
}
